from rest_framework import serializers
from .models import User, Tenant, PairingCode
from rest_framework_simplejwt.tokens import RefreshToken

class DiasporaSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']

    def create(self, validated_data):
        tenant = Tenant.objects.create()
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            role='DIASPORA_MEMBER',
            tenant=tenant
        )
        return user

class PinSetupSerializer(serializers.Serializer):
    pin = serializers.CharField(max_length=4, min_length=4)

class KycSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=20)
    bvn = serializers.CharField(max_length=11, write_only=True)

class GeneratePairingCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PairingCode
        fields = ['code', 'expires_at']
        read_only_fields = ['code', 'expires_at']

class FamilyOnboardSerializer(serializers.Serializer):
    pairing_code = serializers.CharField(max_length=10)
    full_name = serializers.CharField(max_length=150)
    phone_number = serializers.CharField(max_length=20)
    pin = serializers.CharField(max_length=4, min_length=4)

    def validate_pairing_code(self, value):
        try:
            code_obj = PairingCode.objects.get(code=value)
            if not code_obj.is_valid():
                raise serializers.ValidationError("This pairing code is expired or has already been used.")
            return code_obj
        except PairingCode.DoesNotExist:
            raise serializers.ValidationError("Invalid pairing code.")

class UniversalLoginSerializer(serializers.Serializer):
    identifier = serializers.CharField(
        help_text="Email for Diaspora Members, Phone Number for Family Members."
    )
    credential = serializers.CharField(
        write_only=True,
        style={'input_type': 'password'},
        help_text="Password for Diaspora, 4-digit PIN for Family."
    )

    def validate(self, attrs):
        identifier = attrs.get('identifier')
        credential = attrs.get('credential')
        
        if '@' in identifier:
            user = User.objects.filter(email=identifier).first()
        else:
            user = User.objects.filter(phone_number=identifier).first()
        
        if user and user.check_password(credential):
            refresh = RefreshToken.for_user(user)
            
            return {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'role': user.role,
                'tenant_id': user.tenant.id if user.tenant else None
            }
            
        raise serializers.ValidationError({"detail": "Invalid credentials provided."})
