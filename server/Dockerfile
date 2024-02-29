FROM python:3.9.10

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app

COPY ./requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY /syncsound .

EXPOSE 8000

CMD python manage.py runserver localhost:8000