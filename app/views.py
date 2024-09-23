from django.shortcuts import render
from django.http import HttpResponse as HTTPResponse
from django_nextjs.render import render_nextjs_page

# REST imports
from rest_framework import status, viewsets
from rest_framework.response import Response
from .models import Document
from .serializers import DocumentSerializer


async def index(request):
    return await render_nextjs_page(request)
