from email.policy import default
from xmlrpc.client import Boolean
from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=10)
    sex = models.CharField(max_length=10)
    age = models.IntegerField()
    