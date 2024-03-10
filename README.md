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
