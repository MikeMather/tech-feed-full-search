from .baseParser import FeedParser
from bs4 import BeautifulSoup
from Post.models import Post
import requests

class UberParser(FeedParser):
    
    def get_content(self, entry):
        url = entry.link
        r = requests.get(url)
        soup = BeautifulSoup(r.text, features="html.parser")
        article = soup.find('article', { 'class': 'post'})
        return article.get_text()