from django.shortcuts import render
from django.http import JsonResponse
from .models import Post

def search(request):
    query = request.GET.get('q', '')
    if query:
        result = Post.objects.filter(search_vector=query).values('id', 'title', 'description', 'url')
        result = list(result)
        return JsonResponse(result)