from django.urls import path

from . import views

app_name = 'products'

urlpatterns = [
    path('product/', views.about_product, name='products'),

]
