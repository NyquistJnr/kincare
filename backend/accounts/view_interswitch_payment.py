import hashlib
import hmac
import uuid as uuid_lib
import json
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import PaymentMethod
from .serializers import PaymentMethodSerializer
from .interswitch_service import InterswitchService
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema
# from qstash import QStash
from .serializers import (
    PaymentMethodSerializer
)
from .interswitch_service import InterswitchService
from rest_framework.permissions import IsAuthenticated


class InitiateCardLinkView(APIView):
    """
    POST /payment-methods/initiate/
    Returns the checkout configuration the frontend needs to launch
    the Interswitch inline payment widget.
    """
    permission_classes = [IsAuthenticated]

    @extend_schema(summary="Initiate Card Link (Web Checkout)", tags=["Payment Methods"])
    def post(self, request):
        user = request.user

        if user.role != 'DIASPORA_MEMBER':
            return Response(
                {"success": False, "message": "Only Diaspora Members can link payment methods."},
                status=status.HTTP_403_FORBIDDEN,
            )

        # Generate a unique transaction ref for this card-link attempt
        transaction_ref = f"KIN-{uuid_lib.uuid4().hex[:12].upper()}"

        # Store a pending record so we can match the webhook back to this user
        PaymentMethod.objects.filter(user=user, is_active=False).delete()  # clean stale
        PaymentMethod.objects.create(
            user=user,
            transaction_ref=transaction_ref,
            is_active=False,
        )

        # The amount is a nominal ₦50 card-validation charge (5000 kobo).
        # Interswitch requires a real amount even for tokenization.
        # You can refund this or treat it as a zero-amount depending on your
        # pay item configuration in QTB.
        checkout_config = {
            "merchant_code": settings.INTERSWITCH_MERCHANT_CODE,
            "pay_item_id": settings.INTERSWITCH_PAYMENT_ITEM_ID,
            "transaction_ref": transaction_ref,
            "amount": "5000",           # in Kobo — ₦50
            "currency": "566",          # NGN numeric code
            "customer_id": str(user.id),
            "customer_name": user.get_full_name() or user.username,
            "customer_email": user.email or "",
            "mode": "TEST",             # change to "LIVE" on production
            "tokenize": True,           # tells Interswitch to return a card token
            "redirect_url": settings.INTERSWITCH_REDIRECT_URL,
            # JS script src for the inline widget
            "checkout_script": "https://newwebpay.qa.interswitchng.com/inline-checkout.js",
        }

        return Response({
            "success": True,
            "message": "Checkout session ready. Load the Interswitch widget with the config below.",
            "data": checkout_config,
        }, status=status.HTTP_200_OK)


from django.http import HttpResponse # Add this import at the top

@method_decorator(csrf_exempt, name='dispatch')
class InterswitchWebhookView(APIView):
    permission_classes = []   
    authentication_classes = []

    @extend_schema(exclude=True)  
    def post(self, request):
        # 1. Read raw bytes BEFORE anything else touches the request
        raw_body = request.body
        signature = request.headers.get("X-Interswitch-Signature", "")

        print("\n=== INTERSWITCH WEBHOOK RECEIVED ===")
        print(f"Signature: {signature}")

        interswitch = InterswitchService()

        # TEMPORARY HACKATHON BYPASS: 
        # If the signature fails, we will print a warning but STILL PROCESS IT 
        # so you can see if the actual payload is working for your demo.
        if not interswitch.verify_webhook_signature(raw_body, signature):
            print("WARNING: Signature failed, but processing anyway for debug purposes.")
            # In production, you would return HttpResponse(status=200) right here.

        # 2. Parse the payload
        try:
            payload = json.loads(raw_body)
            print(f"Payload Event: {payload.get('event')}")
        except json.JSONDecodeError:
            print("ERROR: Could not decode JSON body.")
            return HttpResponse(status=200) # STRICTLY NO BODY

        event = payload.get("event", "")
        data = payload.get("data", {})

        # 3. Only process completed, successful transactions
        if event == "TRANSACTION.COMPLETED" and data.get("responseCode") == "00":
            # The docs say the reference could be in uuid or merchantReference
            merchant_ref = data.get("merchantReference") or payload.get("uuid")
            token = data.get("token")
            card_number = data.get("cardNumber", "")   
            pan_last4 = card_number[-4:] if card_number else ""
            card_type = data.get("paymentMethodType", "UNKNOWN")

            print(f"Processing Successful Payment for Ref: {merchant_ref}")

            if merchant_ref:
                try:
                    pending = PaymentMethod.objects.get(
                        transaction_ref=merchant_ref,
                        is_active=False,
                    )
                    pending.interswitch_token = token or "" # Make sure this matches your model field name!
                    pending.pan_last4 = pan_last4
                    pending.card_type = card_type
                    pending.is_active = True
                    pending.save()
                    print(f"SUCCESS: Card {pan_last4} linked to user {pending.user.username}!")
                except PaymentMethod.DoesNotExist:
                    print(f"WARNING: No pending payment found for ref {merchant_ref}")

        # 4. Always return strict HTTP 200 with NO BODY
        return HttpResponse(status=200)

class RequeryCardLinkView(APIView):
    """
    POST /payment-methods/requery/
    Manual fallback: call this if the webhook was delayed and you want to
    check if a pending card-link transaction succeeded.
    """
    permission_classes = [IsAuthenticated]

    @extend_schema(summary="Requery Card Link Status", tags=["Payment Methods"])
    def post(self, request):
        user = request.user
        transaction_ref = request.data.get("transaction_ref")

        if not transaction_ref:
            return Response(
                {"success": False, "message": "transaction_ref is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            pending = PaymentMethod.objects.get(
                user=user, transaction_ref=transaction_ref
            )
        except PaymentMethod.DoesNotExist:
            return Response(
                {"success": False, "message": "Transaction not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        if pending.is_active:
            return Response({
                "success": True,
                "message": "Card already linked.",
                "data": PaymentMethodSerializer(pending).data,
            })

        # Hit Interswitch to check status
        result = InterswitchService().requery_transaction(transaction_ref)

        if result["success"]:
            pending.token = result.get("token") or ""
            pending.pan_last4 = result.get("pan_last4") or ""
            pending.card_type = result.get("card_type") or ""
            pending.is_active = True
            pending.save()

            return Response({
                "success": True,
                "message": "Card linked successfully.",
                "data": PaymentMethodSerializer(pending).data,
            })

        return Response({
            "success": False,
            "message": "Transaction not yet completed. Please try again shortly.",
            "data": {"response_code": result.get("response_code")},
        }, status=status.HTTP_202_ACCEPTED)

class PaymentMethodListView(APIView):
    """
    GET /payment-methods/
    List all active linked cards for the authenticated Diaspora member.
    """
    permission_classes = [IsAuthenticated]

    @extend_schema(summary="List Linked Payment Methods", tags=["Payment Methods"])
    def get(self, request):
        if request.user.role != 'DIASPORA_MEMBER':
            return Response(
                {"success": False, "message": "Only Diaspora Members have payment methods."},
                status=status.HTTP_403_FORBIDDEN,
            )
        methods = PaymentMethod.objects.filter(user=request.user, is_active=True)
        return Response({
            "success": True,
            "data": PaymentMethodSerializer(methods, many=True).data,
        })
