from Feed.models import Feed
from django.core.management.base import BaseCommand, CommandError
from parsers.FacebookParser import FacebookParser
from parsers.SpotifyParser import SpotifyParser
from parsers.NetflixParser import NetflixParser
from parsers.AirBnBParser import AirBnBParser


FEEDS = {
    'Facebook': FacebookParser,
    'Spotify': SpotifyParser,
    'Netflix': NetflixParser,
    'AirBnB': AirBnBParser
}

class Command(BaseCommand):
    help = 'Runs the feed parsers'

    def handle(self, *args, **options):
        for name, parser in FEEDS.items():
            feed = Feed.objects.get(name=name)
            runner = parser(feed.id)
            runner.parse_feed()