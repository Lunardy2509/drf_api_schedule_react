from rest_framework import serializers
from DRF.models import *
class JadwalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jadwal
        fields = '__all__'
