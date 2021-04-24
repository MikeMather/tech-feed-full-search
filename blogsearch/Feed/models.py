from django.db import models
import uuid

class Feed(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=500)
    url = models.URLField()

    def __str__(self):
        return f'{self.name} - {self.id}'

    class Meta:
        db_table = 'feeds'