from django.urls import path
from .views import (
    DiasporaSignUpView, 
    TransactionPinView, 
    KycSubmissionView,
    GeneratePairingCodeView,
    FamilyOnboardView,
    UniversalLoginView,
    CustomTokenRefreshView
)

urlpatterns = [
    path('login/', UniversalLoginView.as_view(), name='universal_login'),
    path('refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('diaspora/signup/', DiasporaSignUpView.as_view(), name='diaspora-signup'),
    path('diaspora/pin/', TransactionPinView.as_view(), name='diaspora-pin'),
    path('diaspora/kyc/', KycSubmissionView.as_view(), name='diaspora-kyc'),
    path('diaspora/generate-code/', GeneratePairingCodeView.as_view(), name='generate-code'),
    path('family/onboard/', FamilyOnboardView.as_view(), name='family-onboard'),
]
