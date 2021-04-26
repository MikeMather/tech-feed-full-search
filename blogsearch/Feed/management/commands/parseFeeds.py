import sys
from Feed.models import Feed
from django.core.management.base import BaseCommand, CommandError
from parsers.baseParser import FeedParser, SummaryAsContentParser, ContentAsDescriptionParser
from parsers.SpotifyParser import SpotifyParser
from parsers.RiotGamesParser import RiotGamesParser
from parsers.UberParser import UberParser


FEEDS = {
    'Facebook': FeedParser,
    'Spotify': SpotifyParser,
    'Netflix': FeedParser,
    'AirBnB': ContentAsDescriptionParser,
    'Asana': FeedParser,
    'BBC': ContentAsDescriptionParser,
    'CloudFlare': FeedParser,
    'Dropbox': ContentAsDescriptionParser,
    'GitHub': FeedParser,
    'Google Security': ContentAsDescriptionParser,
    'Google Research': ContentAsDescriptionParser,
    'Grab': SummaryAsContentParser,
    'Instagram': ContentAsDescriptionParser,
    'Intuit': ContentAsDescriptionParser,
    'Lyft': ContentAsDescriptionParser,
    'Medium': ContentAsDescriptionParser,
    'New York Times': ContentAsDescriptionParser,
    'Pinterest': ContentAsDescriptionParser,
    'Riot Games': RiotGamesParser,
    'SkyScanner': ContentAsDescriptionParser,
    'SoundCloud': ContentAsDescriptionParser,
    'Twitch': ContentAsDescriptionParser,
    'Asana': FeedParser
}

class Command(BaseCommand):
    help = 'Runs the feed parsers'

    def handle(self, *args, **options):
        for name, parser in FEEDS.items():
            try:
                feed = Feed.objects.get(name=name)
                runner = parser(feed.id)
                runner.parse_feed()
            except Exception as e:
                print(e)
                print(f'Error parsing {name} feed')