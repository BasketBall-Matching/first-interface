from django.db import models
from django.forms import CharField

# Create your models here.
class GuestGame(models.Model):
    game_date = models.DateField()
    game_time = models.TimeField()
    location = models.CharField(max_length=100, blank=False, null=False)
    member = models.IntegerField()
