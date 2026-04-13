import base64
import hashlib
import hmac
import requests
from django.conf import settings


class InterswitchService:
    SANDBOX_BASE = "https://sandbox.interswitchng.com"

    def __init__(self):
        self.client_id = settings.INTERSWITCH_CLIENT_ID
        self.secret_key = settings.INTERSWITCH_SECRET_KEY
        self.merchant_code = settings.INTERSWITCH_MERCHANT_CODE
        self.payment_item_id = settings.INTERSWITCH_PAYMENT_ITEM_ID

    def _get_access_token(self):
        credentials = f"{self.client_id}:{self.secret_key}"
        encoded = base64.b64encode(credentials.encode()).decode()
        headers = {
            "Authorization": f"Basic {encoded}",
            "Content-Type": "application/x-www-form-urlencoded",
        }
        resp = requests.post(
            f"{self.SANDBOX_BASE}/passport/oauth/token",
            headers=headers,
            data={"grant_type": "client_credentials"},
            timeout=10,
        )
        resp.raise_for_status()
        return resp.json()["access_token"]

    def verify_webhook_signature(self, raw_body: bytes, signature_header: str) -> bool:
        """
        Interswitch signs webhooks with HmacSHA512 using your WEBHOOK secret key.
        """
        # Fallback to the main secret key if the webhook one isn't set yet
        webhook_secret = getattr(settings, 'INTERSWITCH_WEBHOOK_SECRET', self.secret_key)
        
        expected = hmac.new(
            webhook_secret.encode(),
            raw_body,
            hashlib.sha512,
        ).hexdigest()
        
        is_valid = hmac.compare_digest(expected, signature_header)
        
        if not is_valid:
            print("\n=== WEBHOOK SIGNATURE MISMATCH ===")
            print(f"Expected: {expected}")
            print(f"Received: {signature_header}")
            
        return is_valid

    def requery_transaction(self, transaction_ref: str) -> dict:
        """
        Fallback: manually check a transaction's status by reference.
        Used as a safety net if the webhook is delayed.
        """
        access_token = self._get_access_token()
        url = f"{self.SANDBOX_BASE}/api/v1/purchases"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json",
        }
        params = {
            "merchantcode": self.merchant_code,
            "transactionreference": transaction_ref,
            "amount": "100",  # any small amount — required by the endpoint
        }
        try:
            resp = requests.get(url, headers=headers, params=params, timeout=10)
            data = resp.json()
            return {
                "success": data.get("responseCode") == "00",
                "response_code": data.get("responseCode"),
                "token": data.get("token"),
                "pan_last4": data.get("cardNumber", "")[-4:] if data.get("cardNumber") else "",
                "card_type": data.get("paymentMethodType", ""),
                "data": data,
            }
        except requests.exceptions.RequestException as e:
            return {"success": False, "error": str(e)}

    def verify_bvn(self, bvn: str) -> dict:
        """Live BVN verification via Interswitch Identity API."""
        access_token = self._get_access_token()
        url = f"{self.SANDBOX_BASE}/api/v1/identity/bvn"
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json",
        }
        try:
            resp = requests.get(f"{url}?bvn={bvn}", headers=headers, timeout=10)
            resp.raise_for_status()
            return {"success": True, "data": resp.json()}
        except requests.exceptions.RequestException as e:
            return {"success": False, "error": str(e)}
