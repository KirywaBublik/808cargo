import hashlib
import json

from openpyxl import load_workbook
from openpyxl import Workbook

from whatsapp_api_client_python import API
# from twilio.rest import Client
from django.shortcuts import render
from main.forms import UserInfoForm
from main.models import User
from rest_framework.views import APIView

from .consts import TELE_NUM, API_TOKEN_INSTANCE, ID_INSTANCE

'''
Second whatsapp message sender which using twilio API
'''


class VisitCard(APIView):
    # def whatsapp_sender(form_data):
    #     message = f'Новый клиент:\n' \
    #           f'Имя: {form_data["name"]}\n' \
    #           f'Фамилия: {form_data["surname"]}\n' \
    #           f'Отчество: {form_data["lastname"]}\n' \
    #           f'Город: {form_data["city"]}\n' \
    #           f'Телефон: {form_data["phone"]}'
    #     account_sid = 'SID'
    #     auth_token = 'AUTH_TOKEN'
    #     client = Client(account_sid, auth_token)
    #     message = client.messages.create(
    #         to='whatsapp:+TELE_NUM',
    #         from_='whatsapp:+14155238886',
    #         body=message,
    #     )

    def whatsapp_sender(self, form_data):
        try:
            if "IdInstance" in locals() or "ApiTokenInstance" in locals():
                return

            greenAPI = API.GreenAPI(ID_INSTANCE, API_TOKEN_INSTANCE)
            payload = f'Имя: {form_data["name"]}\n' \
                      f'Фамилия: {form_data["surname"]}\n' \
                      f'Отчество: {form_data["lastname"]}\n' \
                      f'Город: {form_data["city"]}\n' \
                      f'Телефон: {form_data["phone"]}\r\n'

            greenAPI.sending.sendMessage(f"{TELE_NUM}@c.us", payload)

        except Exception as e:
            print(f'An error occurred: {str(e)}')

    def export_form_data_to_json(self, form_data):
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

        self.whatsapp_sender(data)

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

    def encrypt_and_save_data(self, form_data):
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

    def index(self, request):
        form = UserInfoForm(request.POST or None)
        if request.method == 'POST':
            if form.is_valid():
                form_data = form.cleaned_data
                self.export_form_data_to_json(form_data)
                self.encrypt_and_save_data(form_data)
                self.export_form_data_to_xlsx(form_data)
        return render(request, 'main/index.html', {'form': form})
