import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kincare_backend.settings')

import django
django.setup()

from django.test import RequestFactory
from django.contrib.auth import get_user_model
from accounts.view_interswitch_payment import RequeryCardLinkView

User = get_user_model()
user = User.objects.filter(role='DIASPORA_MEMBER').first()
print('User:', user)

factory = RequestFactory()
request = factory.post(
    '/api/v1/auth/payment-methods/requery/',
    data='{"transaction_ref": "test"}',
    content_type='application/json'
)
request.user = user

view = RequeryCardLinkView.as_view()
try:
    response = view(request)
    print('Status:', response.status_code)
    print('Data:', response.data)
except Exception as e:
    import traceback
    traceback.print_exc()
