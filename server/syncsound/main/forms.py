from django import forms


class UserInfoForm(forms.Form):
    first_name = forms.CharField(label='Имя', max_length=20)
    last_name = forms.CharField(label='Фамилия', max_length=20)
    sur_name = forms.CharField(label='Отчество', max_length=20, required=False)
    phone_number = forms.CharField(
        label='Номер телефона',
        max_length=20,
    )
    city = forms.CharField(label='Город', required=False)
