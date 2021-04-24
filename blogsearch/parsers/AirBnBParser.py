from .baseParser import FeedParser
from bs4 import BeautifulSoup
from Post.models import Post

class AirBnBParser(FeedParser):
    
    def get_description(self, entry):
        return entry.content[0].value[:250]
