from django.contrib.postgres.search import SearchHeadline, SearchQuery, SearchRank, SearchVector
from django.shortcuts import render
from django.http import JsonResponse
from .models import Post
from django.db.models import F
from django.db.models import Q


def search(request):
    query = request.GET.get('q', '')
    print('Search query: ', query)
    if query:
        query = query.lower()
        search_query = SearchQuery(query, search_type='phrase')
        headline = SearchHeadline('content', search_query, start_sel='<span class="headline">', stop_sel='</span>')
        title_vector = SearchVector('title')
        vector_result = Post.objects \
            .filter(Q(search_vector=search_query) | Q(title__icontains=query), hidden=False) \
            .annotate(
                headline=headline, 
                rank=SearchRank(F('search_vector'), search_query)
            ) \
            .values('id', 'title', 'description', 'url', 'feed__name', 'created_at', 'image', 'published_at', 'headline') \
            .order_by('-rank', '-created_at')[:20]
        return JsonResponse(list(vector_result), safe=False)
    else:
        response = {'message': 'Expected query parameters'}
        return JsonResponse(response, safe=False)

def feed(request):
    page = int(request.GET.get('page', 1))
    PAGE_SIZE_END = 30 * page
    PAGE_SIZE_START = (page - 1) * 30
    feed = Post.objects.filter(hidden=False) \
        .values('id', 'title', 'description', 'url', 'feed__name', 'created_at', 'image', 'published_at') \
        .order_by('-published_at', '-created_at')[PAGE_SIZE_START:PAGE_SIZE_END]
    feed = list(feed)
    return JsonResponse(feed, safe=False)