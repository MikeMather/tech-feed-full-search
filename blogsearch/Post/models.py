from django.db import models
import uuid
from django.contrib.postgres.search import SearchVectorField
from django.contrib.postgres.indexes import GinIndex
from Feed.models import Feed

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE, related_name='posts')
    url = models.URLField(blank=True)
    title = models.CharField(max_length=500, blank=True)
    image = models.URLField(blank=True, max_length=500)
    description = models.TextField(blank=True)
    content = models.TextField(blank=True)
    search_vector = SearchVectorField(null=True)
    hidden = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'posts'
        indexes = (GinIndex(fields=["search_vector"]),)
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.feed.name} - {self.title}'