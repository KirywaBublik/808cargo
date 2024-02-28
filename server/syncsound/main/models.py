from django.db import models


class User(models.Model):
    name = models.CharField('Имя', max_length=100)
    surname = models.CharField('Фамилия', max_length=100)
    lastname = models.CharField('Отчество', max_length=100, blank=True)
    phone = models.CharField('Телефон', max_length=100)
    city = models.CharField('Город', max_length=100)
