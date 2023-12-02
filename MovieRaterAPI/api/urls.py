from django.urls import path
from rest_framework import routers
from django.urls.conf import include

router = routers.DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
]
