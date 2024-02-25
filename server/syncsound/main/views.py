from django.shortcuts import render, redirect

from main.forms import UserInfoForm


def index(request):
    form = UserInfoForm(request.POST or None)
    context = {'form': form}
    if form.is_valid():
        form.save()
    return render(request, 'main/index.html', context)
