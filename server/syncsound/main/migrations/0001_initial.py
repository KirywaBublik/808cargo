# Generated by Django 4.2.7 on 2024-02-25 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Visit_card',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=20, verbose_name='Фамилия')),
                ('sur_name', models.CharField(blank=True, max_length=20, verbose_name='Отчество')),
                ('phone_number', models.CharField(max_length=20, verbose_name='Номер телефона')),
                ('city', models.CharField(verbose_name='Город')),
            ],
        ),
    ]
