from django.core.management.base import BaseCommand, CommandError
from Post.models import Post
import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS
from boto3 import session
from botocore.client import Config
import os
import time

class Command(BaseCommand):
    help = 'Create word clouds for posts that dont have images'

    def handle(self, *args, **options):
      SPACES_URL = 'https://tech-feed.nyc3.cdn.digitaloceanspaces.com'
      spaces_session = session.Session()
      client = spaces_session.client('s3',
                        region_name='nyc3',
                        endpoint_url='https://nyc3.digitaloceanspaces.com',
                        aws_access_key_id=os.environ.get('SPACES_ACCESS_KEY'),
                        aws_secret_access_key=os.environ.get('SPACES_SECRET_ACCESS_KEY'))
      posts = Post.objects.filter(image='').order_by('-created_at')
      for post in posts:
        print(f'Creating word cloud for {post.title}')
        word_cloud = WordCloud(collocations=False, \
          background_color='#171515', \
          stopwords=STOPWORDS, \
          width=1920, height=1080).generate(post.content)
        plt.imshow(word_cloud, interpolation='bilinear')
        plt.axis("off")
        plt.rcParams['savefig.facecolor']='#171515'
        plt.savefig(f'{post.id}.png', bbox_inches='tight', pad_inches=0)
        client.upload_file(f'{post.id}.png', 'tech-feed', f'{post.id}.png', ExtraArgs={'ACL': 'public-read'})
        image_url = f'{SPACES_URL}/{post.id}.png'
        post.image = image_url
        post.save()
        os.remove(f'{post.id}.png')
        time.sleep(2)
