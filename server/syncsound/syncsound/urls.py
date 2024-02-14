from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls', namespace='main')),
    path('product/', include('products.urls', namespace='products')),
    # path('product/', include('products.urls', namespace='product'))
]
