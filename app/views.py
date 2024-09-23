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


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def create(self, request, *args, **kwargs):
        document = Document(
            title=request.data.get('title'),
            author=request.data.get('author'),
            content=request.data.get('content')
        )
        document.save()
        document.generate_summary()  # Call to OpenAI API after document is saved
        serializer = self.get_serializer(document)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
