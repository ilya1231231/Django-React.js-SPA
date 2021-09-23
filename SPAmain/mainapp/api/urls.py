from django.urls import path
from .views import TestAPIView

urlpatterns =[
    path('testapi/', TestAPIView.as_view(), name='test')
]