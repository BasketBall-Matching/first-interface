from rest_framework import serializers
from .models import GuestGame

class GuestGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestGame
        fields = '__all__'