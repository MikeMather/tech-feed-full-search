from django.core.management.base import BaseCommand, CommandError
from Post.models import Post
from bs4 import BeautifulSoup
import requests
import time

def get_og_props(entry):
  image = ''
  date_published = None
  r = requests.get(entry)
  soup = BeautifulSoup(r.text, features="html.parser")
  og_image = soup.find("meta", property="og:image")
  if og_image and 'content' in og_image.attrs:
      image = og_image['content']
  og_date_published = soup.find("meta", property="article:published_time")
  if og_date_published and 'content' in og_date_published.attrs:
      date_published = og_date_published['content']
  return [image, date_published]

class Command(BaseCommand):
    help = 'Refresh all posts'

    def handle(self, *args, **options):
        posts = Post.objects.filter(image='')
        for i, post in enumerate(posts[407:]):
            print(f'Index {i}')
            try:
              image, date_published = get_og_props(post.url)
              print(image, date_published)
              post.image = image
              post.published_at = date_published
              post.save()
              print('-' * 20)
              time.sleep(3)
            except Exception as e:
              print(e)