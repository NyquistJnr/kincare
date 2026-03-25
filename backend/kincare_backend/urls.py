from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from drf_spectacular.utils import extend_schema


class HiddenSchemaView(SpectacularAPIView):
    @extend_schema(exclude=True)
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('accounts.urls')),
    path('api/schema/', HiddenSchemaView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]