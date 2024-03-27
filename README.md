<h1>Frontend</h1>
<br/>
<br/>
Проект реализован с помощью фрейморка - ReactJs + TypeScript, сборщиком выступал - Vite, придерживался структуры FSD, используемые библиотеки для упрощения написания кода - TailWindcss, axios, react-hook-form, classnames, i18n, react-router-dom, swiper.
<br/>
<br/>
Был настроен eslint&prettier для совместной разработки.
<br/>
<br/>
Запуск проекта локально:
<br/>
<br/>

```bash
1. cd client/
```

```bash
2. yarn (npm install)
```

```bash
3. yarn dev (npm run dev)
```

<br/>
<br/>
Запуска проекта через докер:
<br/>
<br/>

```bash
1. cd client/
```

```bash
2. docker build -t {name} .  , где {name} - любое имя образа
```

```bash
3. docker run --rm --name {name2} -p 3000:5173 -d {name} , где {name} - имя образа, а {name2} - имя контейнера
```

<br/>
<br/>
<h2>Изменение пути к сереру</h2>
По умолчанию ссылка на сервер === http://localhost:8000/backend/, но при желании ее можно изменить с помощью .env файла.
<br/>
Чтобы это сделать нужно при запуске проекта в dev(production) режиме прописать 

```bash
VITE_API_URL={link} yarn dev(build)
```

<br/>
Чтобы изменить порт запуска проекта нужно ввести префиксом

```bash
VITE_PORT={number(4 digits)} yarn dev(build)
```

<br/>
<br/>
<h1>Backend</h1>
<br/>
<br/>
Проект реализован с помощью фрейморка Django REST framework
<br/>
<br/>
Для запуска проекта локально:
<br/>
<br/>
1. создать и активировать виртуальное окружение с зависимостями из server/requirements.txt <br/>
2. cd /server/syncsound <br/>
3. в settings.py (cd server/syncsound/syncsound) в DATABASES ключу host присвоить значение localhost <br/>
4. выполнить миграции 

```bash
python manage.py makemigrations
python manage.py migrate
```

5. python manage.py runserver <br/>
<br/>
<br/>
Запуск через докер:
<br/>
<br/>
1. cd server/ <br/>
2. в settings.py (cd server/syncsound/syncsound) в DATABASES к ключу host установить значение db <br/>

 ```bash
     docker-compose build
     docker-compose up
 ```
3. при собранном и поднятом докере сделать миграции в контейнерах бэкенда <br/>

 ```bash
     docker exec -it backend python manage.py makemigrations
     docker exec -it backend python manage.py migrate
 ```
