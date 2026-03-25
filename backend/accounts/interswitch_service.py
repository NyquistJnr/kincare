import os
import base64
import requests
from django.conf import settings

class InterswitchService:
    def __init__(self):
        self.client_id = settings.INTERSWITCH_CLIENT_ID
        self.secret_key = settings.INTERSWITCH_SECRET_KEY
        # Sandbox URLs
        self.passport_url = "https://sandbox.interswitchng.com/passport/oauth/token"
        self.bvn_endpoint = "https://sandbox.interswitchng.com/api/v1/identity/bvn"

    def _get_access_token(self):
        """Authenticates with Interswitch to get a Bearer token."""
        # Interswitch requires the Client ID and Secret to be Base64 encoded
        print(f"DEBUG: Client ID is: {self.client_id}")
        credentials = f"{self.client_id}:{self.secret_key}"
        encoded_credentials = base64.b64encode(credentials.encode('utf-8')).decode('utf-8')

        headers = {
            "Authorization": f"Basic {encoded_credentials}",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        
        payload = {
            "grant_type": "client_credentials"
        }

        try:
            response = requests.post(self.passport_url, headers=headers, data=payload, timeout=10)
            response.raise_for_status()
            return response.json().get("access_token")
        except requests.exceptions.RequestException as e:
            print(f"Interswitch Auth Error: {e}")
            return None

    def verify_bvn(self, bvn):
        """MOCKED FOR HACKATHON SPEED: Bypasses actual Interswitch call."""
        print(f"MOCKING BVN VERIFICATION FOR: {bvn}")
        return {"success": True, "data": {"firstName": "Test", "lastName": "User"}}

