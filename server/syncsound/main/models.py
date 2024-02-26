from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
