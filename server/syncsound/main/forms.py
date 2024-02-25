from django import forms

from main.models import User


class UserInfoForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['name', 'surname', 'lastname', 'phone', 'city']
