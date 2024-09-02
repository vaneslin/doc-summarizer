from django.shortcuts import render
from django.http import HttpResponse as HTTPResponse


def index(request):
    return render(request, 'app/index.html')
# Create your views here.
