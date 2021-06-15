from django.shortcuts import render
from django.http import JsonResponse
from .models import Post

def search(request):
    query = request.GET.get('q', '')
    print('Search query: ', query)
    if query:
        query = query.lower()
        title_result = Post.objects.filter(title__icontains=query, hidden=False) \
            .values('id', 'title', 'description', 'url', 'feed__name', 'created_at')
        vector_result = Post.objects.filter(search_vector=query, hidden=False) \
            .values('id', 'title', 'description', 'url', 'feed__name', 'created_at') \
            .order_by('-created_at')
        print(f'title result: {len(title_result)}. vector result: {len(vector_result)}')
        title_ids = [title['id'] for title in title_result]
        unique_vector_result = [result for result in vector_result if result['id'] not in title_ids]
        result = list(title_result) + list(unique_vector_result)
        return JsonResponse(result, safe=False)
    else:
        response = {'message': 'Expected query parameters'}
        return JsonResponse(response, safe=False)

def feed(request):
    feed = Post.objects.filter(hidden=False) \
        .values('id', 'title', 'description', 'url', 'feed__name', 'created_at') \
        .order_by('-created_at')[:30]
    feed = list(feed)
    return JsonResponse(feed, safe=False)