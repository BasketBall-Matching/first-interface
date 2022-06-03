from django.urls import path, include
from game import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('games', views.GuestGameView)

urlpatterns = [
    path('api/', include(router.urls), name='games'),
]
