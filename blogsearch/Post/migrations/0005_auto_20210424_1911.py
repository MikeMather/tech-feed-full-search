# Generated by Django 3.2 on 2021-04-24 19:11

import django.contrib.postgres.indexes
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0004_post_content'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='post',
            name='Post_post_search__9abcbb_gin',
        ),
        migrations.AddIndex(
            model_name='post',
            index=django.contrib.postgres.indexes.GinIndex(fields=['search_vector'], name='posts_search__7ce7e8_gin'),
        ),
        migrations.AlterModelTable(
            name='post',
            table='posts',
        ),
    ]
