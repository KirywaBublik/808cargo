import hashlib
import json

from django.shortcuts import render

from main.forms import UserInfoForm
from main.models import User


def export_form_data_to_json(form_data):
    with open(
        'fixtures/main/user_info.json', 'w', encoding='utf-8'
    ) as json_file:
        json.dump(form_data, json_file, ensure_ascii=False, indent=4)


def encrypt_and_save_data(form_data):
    hashed_first_name = hashlib.sha256(
        form_data['name'].encode()).hexdigest()
    hashed_last_name = hashlib.sha256(
        form_data['lastname'].encode()).hexdigest()
    hashed_sur_name = hashlib.sha256(
        form_data['surname'].encode()).hexdigest()
    hashed_city = hashlib.sha256(
        form_data['city'].encode()).hexdigest()
    hashed_phone = hashlib.sha256(
        form_data['phone'].encode()).hexdigest()

    user_data = User(
        name=hashed_first_name,
        lastname=hashed_last_name,
        surname=hashed_sur_name,
        city=hashed_city,
        phone=hashed_phone,
    )
    user_data.save()


def index(request):
    form = UserInfoForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            form_data = form.cleaned_data
            export_form_data_to_json(form_data)
            encrypt_and_save_data(form_data)
    return render(request, 'main/index.html', {'form': form})
