from django.urls import path

from . views import VisitCard

from . import views

app_name = 'main'

urlpatterns = [
    path('', VisitCard.as_view(), name='index'),
]
