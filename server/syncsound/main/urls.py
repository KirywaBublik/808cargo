from django.urls import path

from .views import VisitCard

import os
from dotenv import load_dotenv

load_dotenv()

url_backend = os.getenv('URL_BACK')

app_name = 'main'

urlpatterns = [
    path(f'{url_backend}'+'/', VisitCard.as_view(), name='index'),
]
