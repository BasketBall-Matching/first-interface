from django.urls import path, include
from rest_framework import routers
from accounts import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'user')
urlpatterns = [
    path('', include(router.urls))
]