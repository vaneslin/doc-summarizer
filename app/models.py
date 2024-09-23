from django.db import models

import openai

# Create your models here.


class Document(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField()
    summary = models.TextField(blank=True, null=True)
    metadata = models.JSONField(default=dict, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = models.Manager()

    def generate_summary(self):
        self.summary = "This is a placeholder summary of the document."
        self.save()

    # def generate_summary(self):
    #     # Call OpenAI API to summarize content
    #     try:
    #         response = openai.Completion.create(
    #             engine="text-davinci-003",
    #             prompt=f"Summarize the following document: {self.content}",
    #             max_tokens=100
    #         )
    #         self.summary = response['choices'][0]['text'].strip()
    #         self.save()
    #     except Exception as e:
    #         print(f"Error generating summary: {e}")

    def __str__(self):
        return str(self.title)
