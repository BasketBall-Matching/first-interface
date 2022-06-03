from django.shortcuts import render
from .serializers import GuestGameSerializer
from rest_framework.viewsets import ModelViewSet
from .models import GuestGame
from rest_framework.permissions import AllowAny

# Create your views here.
class GuestGameView(ModelViewSet):
    queryset = GuestGame.objects.all()
    serializer_class = GuestGameSerializer
    permission_classes = [AllowAny]
    