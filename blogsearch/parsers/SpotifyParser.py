from .baseParser import FeedParser
from bs4 import BeautifulSoup
from Post.models import Post
import requests

class SpotifyParser(FeedParser):
    
    def get_content(self, entry):
        url = entry.link
        id = entry.id
        id = id[len(id)-4:]
        
        r = requests.get(url)
        soup = BeautifulSoup(r.text, features="html.parser")
        article = soup.find('article', { 'id': f'post-{id}'})
        return article.get_text()

    def parse_feed(self):
        for entry in self.entries:
            content = self.get_content(entry)

            soup = BeautifulSoup(entry.summary, features='html.parser')
            description = soup.get_text()
            post, created = Post.objects.update_or_create(feed=self.feed, 
                                        url=entry.link,
                                        title=entry.title,
                                        description=description,
                                        content=content)
            if created:
                print('New post: ', post.id)