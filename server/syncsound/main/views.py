from django.shortcuts import render

from .forms import UserInfoForm


def index(request):
    form = UserInfoForm(request.POST or None)
    if form.is_valid():
        pass
    context = {'form': form}
    template = 'main/index.html'
    return render(request, template, context)
