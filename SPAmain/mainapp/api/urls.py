from django.urls import path
from rest_framework import routers
from .views import InstrumentViewSet

router = routers.SimpleRouter()
router.register('instrument', InstrumentViewSet, basename='instrument')

urlpatterns = []
urlpatterns += router.urls
