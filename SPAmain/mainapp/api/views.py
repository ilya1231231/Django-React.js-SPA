from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import InstrumentSerializer
from ..models import Instrument




class InstrumentViewSet(viewsets.ModelViewSet):
    queryset = Instrument.objects.all()
    serializer_class = InstrumentSerializer
