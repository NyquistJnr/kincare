import uuid as uuid_lib
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from drf_spectacular.utils import extend_schema
from qstash import QStash

from .models import PairingCode, User, PaymentMethod
from .serializers import (
    DiasporaSignupSerializer, 
    PinSetupSerializer, 
    KycSerializer,
    GeneratePairingCodeSerializer,
    FamilyOnboardSerializer,
    UniversalLoginSerializer, LinkCardSerializer, VerifyCardOtpSerializer, PaymentMethodSerializer
)
from .interswitch_service import InterswitchService
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

qstash_token = getattr(settings, 'QSTASH_TOKEN', None)
client = QStash(token=qstash_token) if qstash_token else None

class DiasporaSignUpView(APIView):
    serializer_class = DiasporaSignupSerializer

    @extend_schema(summary="Sign Up", tags=["Authentication"])
    def post(self, request):
        serializer = DiasporaSignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "success": True,
                "message": "Diaspora Member created successfully",
                "data": {
                    "user_id": user.id,
                    "tenant_id": user.tenant.id
                }
            }, status=status.HTTP_201_CREATED)
            
        return Response({
            "success": False,
            "message": "Validation failed",
            "data": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class TransactionPinView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PinSetupSerializer

    @extend_schema(summary="Set Transaction PIN", tags=["Authentication"])
    def post(self, request):
        user = request.user 
        serializer = PinSetupSerializer(data=request.data)
        
        if serializer.is_valid():
            user.transaction_pin = make_password(serializer.validated_data['pin'])
            user.save()
            return Response({"message": "Transaction PIN set successfully."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class KycSubmissionView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = KycSerializer

    @extend_schema(summary="Submit KYC Details", tags=["Authentication"])
    def post(self, request):
        user = request.user
        serializer = KycSerializer(data=request.data)
        
        if serializer.is_valid():
            bvn = serializer.validated_data['bvn']
            phone_number = serializer.validated_data['phone_number']
            interswitch = InterswitchService()
            verification_result = interswitch.verify_bvn(bvn)
            
            if verification_result["success"]:
                user.phone_number = phone_number
                user.is_kyc_verified = True
                user.save()
                
                return Response({
                    "success": True,
                    "message": "KYC verified successfully via Interswitch.",
                    "data": {
                        "is_kyc_verified": True
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    "success": False,
                    "message": verification_result.get("error", "BVN Verification failed."),
                    "data": None
                }, status=status.HTTP_400_BAD_REQUEST)
                
        return Response({
            "success": False,
            "message": "Invalid input data",
            "data": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class GeneratePairingCodeView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = GeneratePairingCodeSerializer

    @extend_schema(summary="Generate Pairing Code", tags=["Authentication"])
    def post(self, request):
        user = request.user
        
        if user.role != 'DIASPORA_MEMBER':
            return Response({"error": "Only Diaspora members can generate pairing codes."}, status=status.HTTP_403_FORBIDDEN)
            
        code_obj = PairingCode.objects.create(tenant=user.tenant, created_by=user)
        serializer = GeneratePairingCodeSerializer(code_obj)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class FamilyOnboardView(APIView):
    serializer_class = FamilyOnboardSerializer

    @extend_schema(summary="Onboard Family Member", tags=["Authentication"])
    def post(self, request):
        serializer = FamilyOnboardSerializer(data=request.data)
        
        if serializer.is_valid():
            pairing_code_obj = serializer.validated_data['pairing_code']
            phone_number = serializer.validated_data['phone_number']
            
            name_parts = serializer.validated_data['full_name'].split(' ', 1)
            first_name = name_parts[0]
            last_name = name_parts[1] if len(name_parts) > 1 else ""
            
            user = User.objects.create_user(
                username=phone_number,
                first_name=first_name,
                last_name=last_name,
                role='FAMILY_MEMBER',
                phone_number=phone_number,
                tenant=pairing_code_obj.tenant 
            )
            
            user.set_password(serializer.validated_data['pin'])
            user.save()
            
            pairing_code_obj.is_used = True
            pairing_code_obj.save()
            
            return Response({
                "message": "Family member successfully linked.",
                "user_id": user.id,
                "tenant_id": user.tenant.id
            }, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UniversalLoginView(TokenObtainPairView):
    serializer_class = UniversalLoginSerializer
    
    @extend_schema(
        summary="Universal Log In", 
        description="Diaspora: Use Email + Password. Family: Use Phone Number + PIN.",
        tags=["Authentication"] 
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

class CustomTokenRefreshView(TokenRefreshView):
    @extend_schema(
        summary="Refresh JWT Token", 
        description="Get a new access token using a valid refresh token.",
        tags=["Authentication"]
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

class LinkCardView(APIView):
    """
    POST /payment-methods/link/
    Step 1: Diaspora member submits card details.
    Interswitch validates the card and sends an OTP to the cardholder's
    bank-registered phone number.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = LinkCardSerializer

    @extend_schema(summary="Link Payment Card (Step 1 — Initiate)", tags=["Payment Methods"])
    def post(self, request):
        user = request.user

        if user.role != 'DIASPORA_MEMBER':
            return Response(
                {"success": False, "message": "Only Diaspora Members can link payment methods."},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = LinkCardSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"success": False, "message": "Validation failed", "data": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        data = serializer.validated_data
        interswitch = InterswitchService()

        # Build encrypted authData from raw card fields
        try:
            auth_data = interswitch.build_auth_data(
                pan=data['pan'],
                pin=data['pin'],
                expiry_date=data['expiry_date'],
                cvv=data['cvv'],
            )
        except Exception as e:
            return Response(
                {"success": False, "message": f"Failed to encrypt card data: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        transaction_ref = f"KIN-{uuid_lib.uuid4().hex[:12].upper()}"

        result = interswitch.initiate_card_validation(
            auth_data=auth_data,
            transaction_ref=transaction_ref,
        )

        if not result["success"]:
            return Response(
                {"success": False, "message": result.get("error", "Card validation failed.")},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Store a pending payment method record — activated after OTP
        PaymentMethod.objects.filter(user=user, is_active=False).delete()  # clean stale pending
        PaymentMethod.objects.create(
            user=user,
            token="pending",
            pan_last4=data['pan'][-4:],
            expiry=f"{data['expiry_date'][:2]}/{data['expiry_date'][2:]}",
            transaction_ref=transaction_ref,
            is_active=False,
        )

        return Response({
            "success": True,
            "message": result["message"],
            "data": {
                "transaction_ref": transaction_ref,
                "payment_id": result.get("payment_id"),
            }
        }, status=status.HTTP_200_OK)


class VerifyCardOtpView(APIView):
    """
    POST /payment-methods/link/verify-otp/
    Step 2: Submit OTP to confirm card ownership.
    On success the card is tokenised and saved.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = VerifyCardOtpSerializer

    @extend_schema(summary="Link Payment Card (Step 2 — Verify OTP)", tags=["Payment Methods"])
    def post(self, request):
        user = request.user
        serializer = VerifyCardOtpSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {"success": False, "message": "Validation failed", "data": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        otp = serializer.validated_data['otp']
        transaction_ref = serializer.validated_data['transaction_ref']

        try:
            pending = PaymentMethod.objects.get(
                user=user,
                transaction_ref=transaction_ref,
                is_active=False,
            )
        except PaymentMethod.DoesNotExist:
            return Response(
                {"success": False, "message": "No pending card validation found for this reference."},
                status=status.HTTP_404_NOT_FOUND
            )

        interswitch = InterswitchService()

        # We need the original authData to pass to the OTP endpoint.
        # Rebuild it from nothing — Interswitch actually only needs paymentId + otp
        # for the auth call, but their signature requires authData too.
        # We pass a minimal placeholder since the card data isn't retained server-side.
        result = interswitch.authorize_card_validation_otp(
            otp=otp,
            payment_id=request.data.get("payment_id", ""),
            transaction_ref=transaction_ref,
            auth_data="",
        )

        if not result["success"]:
            return Response(
                {"success": False, "message": result.get("error", "OTP verification failed.")},
                status=status.HTTP_400_BAD_REQUEST
            )

        pending.token = result["token"]
        pending.pan_last4 = result.get("pan_last4") or pending.pan_last4
        pending.card_type = result.get("card_type", "")
        pending.is_active = True
        pending.save()

        return Response({
            "success": True,
            "message": "Card linked successfully.",
            "data": PaymentMethodSerializer(pending).data
        }, status=status.HTTP_200_OK)


class PaymentMethodListView(APIView):
    """
    GET /payment-methods/
    List all active linked payment methods for the authenticated Diaspora member.
    """
    permission_classes = [IsAuthenticated]

    @extend_schema(summary="List Linked Payment Methods", tags=["Payment Methods"])
    def get(self, request):
        user = request.user

        if user.role != 'DIASPORA_MEMBER':
            return Response(
                {"success": False, "message": "Only Diaspora Members have payment methods."},
                status=status.HTTP_403_FORBIDDEN
            )

        methods = PaymentMethod.objects.filter(user=user, is_active=True)
        return Response({
            "success": True,
            "data": PaymentMethodSerializer(methods, many=True).data
        }, status=status.HTTP_200_OK)
