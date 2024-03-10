from rest_framework import serializers
from . models import User


class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("name", "surname", "phone", "city", "products")
