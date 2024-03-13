<h1>Frontend</h1>
<br/>
<br/>
Проект реализован с помощью фрейморка - ReactJs + TypeScript, сборщиком выступал - Vite, придерживался структуры FSD, используемые библиотеки для упрощения написания кода - TailWindcss, axios, react-hook-form, classnames, i18n, react-router-dom, swiper.
<br/>
<br/>
Был настроен eslint&prettier для совместной разработки.
<br/>
<br/>
Запуск проекта "В тупую":
<br/>
<br/>
1. cd client/ <br/>
2. yarn/npm install <br/>
3. yarn dev/ npm run dev <br/>
<br/>
<br/>
Запуска проекта через докер:
<br/>
<br/>
1. cd client/ <br/>
2. docker build -t {name} .  , где {name} - любое имя образа <br/>
3. docker run —rm —name {name2} -p 3000:5173 -d {name} , где {name} - имя образа, а {name2} - имя контейнера <br/>
4. docker ps -a
<br/>
<br/>
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
3. docker-compose build <br/>
4. docker-compose up <br/>
5. при собранном и поднятом докере сделать миграции в контейнерах бэкенда <br/>

 ```bash
     docker exec -it backend python manage.py makemigrations
     docker exec -it backend python manage.py migrate
 ```
