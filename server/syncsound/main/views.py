import hashlib
import json
from openpyxl import load_workbook
from openpyxl import Workbook

from django.shortcuts import render
from main.forms import UserInfoForm
from main.models import User


def export_form_data_to_json(form_data):
    file_path = 'fixtures/main/user_info.json'

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            existing_data = json.load(file)
    except FileNotFoundError:
        existing_data = []

    data = {
        'name': form_data['name'],
        'lastname': form_data['lastname'],
        'surname': form_data['surname'],
        'city': form_data['city'],
        'phone': form_data['phone'],
    }
    existing_data.append(data)

    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(existing_data, file, ensure_ascii=False)


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


def export_form_data_to_xlsx(form_data):
    file_path = 'fixtures/main/user_info.xlsx'

    try:
        load = load_workbook(file_path)
    except FileNotFoundError:
        load = Workbook()
        load.create_sheet('users_info')

    sheet = load['users_info']

    data = [
        form_data['name'],
        form_data['lastname'],
        form_data['surname'],
        form_data['city'],
        form_data['phone'],
    ]

    sheet.append(data)
    load.save(file_path)


def index(request):
    form = UserInfoForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            form_data = form.cleaned_data
            export_form_data_to_json(form_data)
            encrypt_and_save_data(form_data)
            export_form_data_to_xlsx(form_data)
    return render(request, 'main/index.html', {'form': form})
