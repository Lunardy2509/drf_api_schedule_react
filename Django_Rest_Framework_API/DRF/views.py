from rest_framework import viewsets
from DRF.models import *
from DRF.serializers import *
# Create your views here.
class JadwalViewSet(viewsets.ModelViewSet):
    queryset = Jadwal.objects.all()
    serializer_class = JadwalSerializer