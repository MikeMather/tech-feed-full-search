from django.db import models
import uuid

class Search(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    search_term = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'searches'
        verbose_name_plural = 'searches'

    def __str__(self):
        return f'{self.search_term}'