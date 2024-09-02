from django.urls import path
from . import views

"""
    This is a router that defines URL patterns for the app. Path has three arguments:
    1. A regular expression: This is a string that matches the URL pattern. In this case, the empty string represents the base URL.
    2. A view function: This is the function that will be called when the URL pattern is matched. 
    3. A name: This is the name of the URL pattern. This is used to refer to the URL pattern in the code.
"""
urlpatterns = [
    path('', views.index, name='index'),
]
