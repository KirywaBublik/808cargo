# Generated by Django 4.2.7 on 2024-03-10 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_user_lastname_remove_user_surname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=100, verbose_name='Имя'),
        ),
    ]
