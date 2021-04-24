from Feed.models import Feed
import feedparser
from abc import ABC, abstractmethod
from bs4 import BeautifulSoup
from Post.models import Post

class FeedParser(ABC):

    feed = None
    entries = []

    def __init__(self, feed_id):
        self.feed = Feed.objects.get(pk=feed_id)
        self.recent_posts = self.feed.posts.all().order_by('-created_at')[:10]
        feed_content = feedparser.parse(self.feed.url)
        self.entries = feed_content.entries

    def get_link(self, entry):
        return entry.link
    
    def get_title(self, entry):
        return entry.title

    def get_content(self, entry):
        soup = BeautifulSoup(entry.content[0].value, features='html.parser')
        content = soup.get_text()
        return content

    def get_description(self, entry):
        soup = BeautifulSoup(entry.summary, features='html.parser')
        description = soup.get_text()
        if len(description) > 250:
            description = description[:250] + '...'
        return description

    def parse_feed(self):
        for entry in self.entries:
            
            # Get Post details
            link = self.get_link(entry)
            title = self.get_title(entry)
            content = self.get_content(entry)
            description = self.get_description(entry)

            existing_post = Post.objects.get(url=link)
            if not existing_post:
                post = Post.objects.create(feed=self.feed, 
                                            url=link,
                                            title=title,
                                            description=description,
                                            content=content)
                print('New post: ', post.id)


class SummaryAsContentParser(FeedParser):

    def get_content(self, entry):
        soup = BeautifulSoup(entry.summary, features='html.parser')
        content = soup.get_text()
        return content


class ContentAsDescriptionParser(FeedParser):
    
    def get_description(self, entry):
        soup = BeautifulSoup(entry.content[0].value, features='html.parser')
        description = soup.get_text()
        if len(description) > 250:
            description = description[:250] + '...'
        return description