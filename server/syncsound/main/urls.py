from django.urls import path

from .views import VisitCard

app_name = 'main'

urlpatterns = [
    path('backend/', VisitCard.as_view(), name='index'),
]
