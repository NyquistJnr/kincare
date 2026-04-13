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

from .view_interswitch_payment import (
    PaymentMethodListView,
    InitiateCardLinkView,
    RequeryCardLinkView,
    InterswitchWebhookView
)

urlpatterns = [
    path('login/', UniversalLoginView.as_view(), name='universal_login'),
    path('refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('diaspora/signup/', DiasporaSignUpView.as_view(), name='diaspora-signup'),
    path('diaspora/pin/', TransactionPinView.as_view(), name='diaspora-pin'),
    path('diaspora/kyc/', KycSubmissionView.as_view(), name='diaspora-kyc'),
    path('diaspora/generate-code/', GeneratePairingCodeView.as_view(), name='generate-code'),
    path('family/onboard/', FamilyOnboardView.as_view(), name='family-onboard'),

    path('payment-methods/', PaymentMethodListView.as_view(), name='payment-methods-list'),
    path('payment-methods/initiate/', InitiateCardLinkView.as_view(), name='initiate-card-link'),
    path('payment-methods/requery/', RequeryCardLinkView.as_view(), name='requery-card-link'),
    path('payment-methods/webhook/', InterswitchWebhookView.as_view(), name='isw-webhook'),
]
