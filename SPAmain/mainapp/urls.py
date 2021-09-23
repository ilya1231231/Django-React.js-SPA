from django.contrib import admin
from django.urls import path, include
from .views import index, instrument_detail
urlpatterns = [
    path('1/', index),
    path('instrument/<int:id>/', instrument_detail)

]