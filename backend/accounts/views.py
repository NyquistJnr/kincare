from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from drf_spectacular.utils import extend_schema
from qstash import QStash

from .models import PairingCode, User
from .serializers import (
    DiasporaSignupSerializer, 
    PinSetupSerializer, 
    KycSerializer,
    GeneratePairingCodeSerializer,
    FamilyOnboardSerializer,
    UniversalLoginSerializer
)
from .interswitch_service import InterswitchService
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

qstash_token = getattr(settings, 'QSTASH_TOKEN', None)
client = QStash(token=qstash_token) if qstash_token else None

class DiasporaSignUpView(APIView):
    serializer_class = DiasporaSignupSerializer

    @extend_schema(
        summary="Sign Up", 
        description="Creates an Account of any USER TYPE: DIASPORA_MEMBER and FAMILY_MEMBER", 
        tags=["Authentication"], 
    )
    def post(self, request):
        serializer = DiasporaSignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "message": "Diaspora Member created successfully",
                "user_id": user.id,
                "tenant_id": user.tenant.id
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
                    "message": "KYC verified successfully via Interswitch.",
                    "is_kyc_verified": True
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    "error": verification_result.get("error", "BVN Verification failed.")
                }, status=status.HTTP_400_BAD_REQUEST)
                
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
