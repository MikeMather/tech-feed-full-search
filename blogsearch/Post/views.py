from django.shortcuts import render
from django.http import JsonResponse
from .models import Post

def search(request):
    query = request.GET.get('q', '')
    print('Search query: ', query)
    if query:
        query = query.lower()
        title_result = Post.objects.filter(title__icontains=query).values('id', 'title', 'description', 'url', 'feed__name')
        vector_result = Post.objects.filter(search_vector=query).values('id', 'title', 'description', 'url', 'feed__name')
        print(f'title result: {len(title_result)}. vector result: {len(vector_result)}')
        result = title_result | vector_result
        result = result.distinct().order_by('-created_at')
        result = list(result)
        return JsonResponse(result, safe=False)
    else:
        response = {'message': 'Expected query parameters'}
        return JsonResponse(response, safe=False)

def feed(request):
    feed = Post.objects.all().values('id', 'title', 'description', 'url', 'feed__name', 'created_at').order_by('-created_at')[:30]
    feed = list(feed)
    return JsonResponse(feed, safe=False)