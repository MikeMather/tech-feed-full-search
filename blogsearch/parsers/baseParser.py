from Feed.models import Feed
import feedparser
from abc import ABC, abstractmethod
from bs4 import BeautifulSoup
from Post.models import Post
import requests

class FeedParser(ABC):

    feed = None
    entries = []

    def __init__(self, feed_id):
        self.feed = Feed.objects.get(pk=feed_id)
        print('Parsing feed: ', self.feed.name)
        feed_content = feedparser.parse(self.feed.url)
        self.entries = self.get_recent_entries(feed_content.entries)
        print(f'Found {len(self.entries)} new entries')


    def get_recent_entries(self, entries):
        existing_posts = list(Post.objects.filter(feed=self.feed).values_list('url', flat=True)[:20].all())
        if existing_posts:
            recent_entries = list(filter(lambda entry: entry.link not in existing_posts, entries))
            return recent_entries
        return []

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
    
    def get_og_props(self, entry):
        image = ''
        date_published = None
        r = requests.get(entry.link)
        soup = BeautifulSoup(r.text, features="html.parser")
        og_image = soup.find("meta", property="og:image")
        if og_image and 'content' in og_image.attrs:
            image = og_image['content']
        og_date_published = soup.find("meta", property="article:published_time")
        if og_date_published and 'content' in og_date_published.attrs:
            date_published = og_date_published['content']
        return [image, date_published]

    def parse_feed(self):
        for entry in self.entries:
            print(f'Trying entry with ID {entry.id}')
            # Get Post details
            link = self.get_link(entry)
            title = self.get_title(entry)
            content = self.get_content(entry)
            description = self.get_description(entry)
            image, date_published = self.get_og_props(entry)

            existing_post = Post.objects.filter(url=link).count()
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