from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_filter = ('created_at', 'feed__name')
    ordering = ('-created_at',)