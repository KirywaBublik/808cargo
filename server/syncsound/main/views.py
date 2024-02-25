from django.core.serializers import serialize
from django.shortcuts import render

from main.forms import UserInfoForm
from main.models import User


def export_data_to_json():
    products = User.objects.all()
    json_data = serialize('json', products)
    with open('fixtures/main/user_info.json', 'w', encoding='utf-8') as file:
        file.write(json_data)


def index(request):
    form = UserInfoForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
    export_data_to_json()
    return render(request, 'main/index.html', {'form': form})
