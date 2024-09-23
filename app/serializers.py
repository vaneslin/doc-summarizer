from rest_framework import serializers
from .models import Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'title', 'author', 'content',
                  'summary', 'metadata', 'created_at', 'updated_at']
