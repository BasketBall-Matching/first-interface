from django.urls import path, include
from game import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', views.GuestGameView)

urlpatterns = [
    path('games/', include(router.urls), name='games'),
]
