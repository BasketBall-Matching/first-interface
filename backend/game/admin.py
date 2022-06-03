from django.contrib import admin
from .models import GuestGame

# Register your models here.
@admin.register(GuestGame)
class GuestGameAdmin(admin.ModelAdmin):
    pass