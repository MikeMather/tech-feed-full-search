# Generated by Django 3.2 on 2021-04-24 19:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0005_auto_20210424_1911'),
    ]

    operations = [
        migrations.RunSQL(
            sql='''
              CREATE TRIGGER search_vector_trigger
              BEFORE INSERT OR UPDATE OF title, content, search_vector
              ON posts
              FOR EACH ROW EXECUTE PROCEDURE
              tsvector_update_trigger(
                search_vector, 'pg_catalog.english', title, content
              );

              UPDATE posts SET search_vector = NULL;
            ''',

            reverse_sql = '''
              DROP TRIGGER IF EXISTS search_vector_trigger
              ON film;
            '''
        )
    ]
