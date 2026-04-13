import uuid
import random
import string
from datetime import timedelta
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

def generate_pairing_code():
    chars = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return f"KIN-{chars}"

def get_expiration_time():
    return timezone.now() + timedelta(hours=48)

class Tenant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Tenant {self.id}"

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    ROLE_CHOICES = (
        ('DIASPORA_MEMBER', 'Diaspora Member'),
        ('FAMILY_MEMBER', 'Family Member'),
        ('ADMIN', 'Admin'),
    )
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    tenant = models.ForeignKey(Tenant, on_delete=models.SET_NULL, null=True, blank=True, related_name='users')
    transaction_pin = models.CharField(max_length=128, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True, unique=True)
    is_kyc_verified = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.username} - {self.role}"

class PairingCode(models.Model):
    code = models.CharField(max_length=10, unique=True, default=generate_pairing_code)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='pairing_codes')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='generated_codes')
    is_used = models.BooleanField(default=False)
    expires_at = models.DateTimeField(default=get_expiration_time)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_valid(self):
        return not self.is_used and timezone.now() < self.expires_at

    def __str__(self):
        return f"{self.code} - {'Valid' if self.is_valid() else 'Expired/Used'}"

class PaymentMethod(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payment_methods')

    token = models.CharField(max_length=255, blank=True)
    pan_last4 = models.CharField(max_length=4, blank=True)
    card_type = models.CharField(max_length=50, blank=True)

    transaction_ref = models.CharField(max_length=100, unique=True)

    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - **** {self.pan_last4 or 'pending'}"
