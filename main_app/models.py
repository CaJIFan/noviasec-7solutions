from django.db import models

# Create your models here.
class Servicio(models.Model):
    codigo = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=20)

class Proveedor(models.Model):
    name = models.CharField(max_length=100)
    vendor_service = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    location_verbose = models.CharField(max_length=100)
    location_coords = models.CharField(max_length=100)
    email = models.EmailField()
    fb_url = models.URLField(max_length=200, null=True, blank=True)
    tw_url = models.URLField(max_length=200, null=True, blank=True)
    ig_url = models.URLField(max_length=200, null=True, blank=True)
    galeria_urls = models.CharField(max_length=500)
