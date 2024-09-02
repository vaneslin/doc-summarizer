from django.shortcuts import render
from django.http import HttpResponse as HTTPResponse

# Create your views here.


def index(request):
    # This view function takes an HTTP request and returns an HTTP response.
    # In this case, it renders the index.html template as a dynamic HTML page (server side rendering).

    # When using React, this function would be different.
    # It would return a JSON response with the backend data i.e. database data to be rendered by React, because React would handle the frontend rendering.
    return render(request, 'app/index.html')
