FROM python:3.8
ENV PYTHONUNBUFFERED=1
WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

RUN mkdir staticfiles

COPY . /app/

ENV DJANGO_SETTINGS_MODULE=blogsearch.settings
ENV DEBUG=0
ENV DB_ENGINE=django.db.backends.postgresql
ENV DB_NAME=main
ENV DB_USER=root
ENV DB_PASSWORD=secret
ENV DB_HOST=db
ENV DB_PORT=5432