let arrCode = [
    '# "use strict"; <br> <span style="color: rgb(0, 43, 0);">- Строгий режим JavaScript</span>',
    '# let nameOfVariable = 25; <br> <span style="color: rgb(0, 43, 0);">- Переменная JavaScript</span>',
    '# const nameOfConstanta = "notChange"; <br> <span style="color: rgb(0, 43, 0);">- Rонстанта JavaScript</span>',
    '# let nameOfArray = ["one", "two", 3]; <br> <span style="color: rgb(0, 43, 0);">- Массив JavaScript</span>',
    '# let nameOfObject = {one : "one", two : "two", three : 3}; <br> <span style="color: rgb(0, 43, 0);">- Объект JavaScript</span>',
    '# function nameOfFunction(dataOne, dataTwo){}; <br> <span style="color: rgb(0, 43, 0);">- Функция JavaScript</span>',
    '# let func = (dataOne, dataTwo) => {}; <br> <span style="color: rgb(0, 43, 0);">- Стрелочная функция JavaScript</span>',
    '# element.setAttribute("onclick", "func()"); <br> <span style="color: rgb(0, 43, 0);">- Добавить атрибут JavaScript</span>',
    '# element.removeAttribute("disabled", "disabled"); <br> <span style="color: rgb(0, 43, 0);">- Удалить атрибут JavaScript</span>',
    '# if (name == "one"){<br># &emsp;&emsp;Выполнится этот код.<br># } else {<br># &emsp;&emsp;Или этот код.<br># }; <br> <span style="color: rgb(0, 43, 0);">- Выбор JavaScript</span>',
    '# switch(data){<br>#  &emsp;&emsp;case 4:<br>#  &emsp;&emsp;&emsp;&emsp;Выполнится этот код.<br>#  &emsp;&emsp;break;<br>#  &emsp;&emsp;default;<br>#  }; <br> <span style="color: rgb(0, 43, 0);">- Выбор JavaScript</span>',
    '# let nameOfVariable = 21 > 18 ? true : false; <br> <span style="color: rgb(0, 43, 0);">- Короткая запись if else JavaScript</span>',
    '# for (let i = 0; i < 10; i++) {}; <br> <span style="color: rgb(0, 43, 0);">- Цикл JavaScript</span>',
    '# for (let i in person) { <br># &emsp;&emsp;data += person[i]; <br># }; <br> <span style="color: rgb(0, 43, 0);">- Цикл for in JavaScript</span>',
    '# document.querySelectorAll(".classCSS"); <br> <span style="color: rgb(0, 43, 0);">- Получить элемент по классу JavaScript</span>',
    '# document.querySelector("#idCSS"); <br> <span style="color: rgb(0, 43, 0);">- Получить элемент по ID JavaScript</span>',
    '# console.log("Данные выводимые в консоль"); <br> <span style="color: rgb(0, 43, 0);">- Вывести лог в консоль JavaScript</span>',
    '# let packData = new Error().stack; <br> <span style="color: rgb(0, 43, 0);">- Получить данные о выполненой операции JavaScript</span>',
    '# window.close(); <br> <span style="color: rgb(0, 43, 0);">- Закрыть страницу JavaScript</span>',
    '# window.open("www.adress.ru"); <br> <span style="color: rgb(0, 43, 0);">- Открыть страницу JavaScript</span>',
    '# String(data); <br> <span style="color: rgb(0, 43, 0);">- Преобразует в строку JavaScript</span>',
    '# Number(data); <br> <span style="color: rgb(0, 43, 0);">- Преобразует в число JavaScript</span>',
    '# element.classList.add("class"); <br> <span style="color: rgb(0, 43, 0);">- Добавить класс JavaScript</span>',
    '# element.classList.remove("class"); <br> <span style="color: rgb(0, 43, 0);">- Удалить класс JavaScript</span>',
    '# element.classList.toogle("class"); <br> <span style="color: rgb(0, 43, 0);">- Сменить класс JavaScript</span>',
    '# num.toFixed(0); <br> <span style="color: rgb(0, 43, 0);">- Округлить до целого с числами после запятой JavaScript</span>',
    '# arr.includes(777); <br> <span style="color: rgb(0, 43, 0);">- Проверяет наличие элемента в массиве JavaScript</span>',
    '# arr.join(", "); <br> <span style="color: rgb(0, 43, 0);">- Преобразовать массив в строку с разделителем JavaScript</span>',
    '# str.trim(); <br> <span style="color: rgb(0, 43, 0);">- Удалить пробелы в начале и конце строки JavaScript</span>',
    '# str.split(","); <br> <span style="color: rgb(0, 43, 0);">- Разбить строку в массив по символу разделителю JavaScript</span>',
    '# if(checkbox.checked == true); <br> <span style="color: rgb(0, 43, 0);">- Проверка чекбокса JavaScript</span>',
    '# if(select.selectedIndex == 1); <br> <span style="color: rgb(0, 43, 0);">- Проверка элемента списка JavaScript</span>',
    '# window.scrollBy({top: -10000}); <br> <span style="color: rgb(0, 43, 0);">- Прокрутить вверх JavaScript</span>',
    '# Math.floor(Math.random() * (max - min)) + min; <br> <span style="color: rgb(0, 43, 0);">- Рандомное число JavaScript</span>',
    '# document.querySelector("#id").innerHTML; <br> <span style="color: rgb(0, 43, 0);">- Вставить контент JavaScript</span>',
    '# localStorage.setItem("test", 1); <br> <span style="color: rgb(0, 43, 0);">- Записать в локальное хранилище JavaScript</span>',
    '# const location = window.location.href; <br> <span style="color: rgb(0, 43, 0);">- Получить URL JavaScript</span>',
    '# localStorage.getItem("test"); <br> <span style="color: rgb(0, 43, 0);">- Получить из локального хранилища JavaScript</span>',
    '# const screenWidth = window.screen.width; / height; <br> <span style="color: rgb(0, 43, 0);">- Получить высоту и ширину окна JavaScript</span>',
    '# color: hsla(9, 100%, 64%, 1); <br> <span style="color: rgb(0, 43, 0);">- Цвет текста CSS</span>',
    '# background-color: black; <br> <span style="color: rgb(0, 43, 0);">- Цвет фона CSS</span>',
    '# background-image: url("img_tree.png"); <br> <span style="color: rgb(0, 43, 0);">- Изображение фона CSS</span>',
    '# background-repeat: no-repeat; <br> <span style="color: rgb(0, 43, 0);">- Повторение фона CSS</span>',
    '# border: 5px solid red; <br> <span style="color: rgb(0, 43, 0);">- Сокращенная форма объявления границы CSS</span>',
    '# margin: 100px 150px 100px 80px; <br> <span style="color: rgb(0, 43, 0);">- Внешние отступы со всех сторон начиная с верхнего CSS</span>',
    '# padding: 25px 50px 75px 100px; <br> <span style="color: rgb(0, 43, 0);">- Внутренние отступы со всех сторон начиная с верхнего CSS</span>',
    '# width: 50%; <br> <span style="color: rgb(0, 43, 0);">- Ширина CSS</span>',
    '# height: 200px; <br> <span style="color: rgb(0, 43, 0);">- Высота CSS</span>',
    '# min-width: 500px; <br> <span style="color: rgb(0, 43, 0);">- Минимальная ширина CSS</span>',
    '# max-width: 500px; <br> <span style="color: rgb(0, 43, 0);">- Максимальная ширина CSS</span>',
    '# text-decoration: none; <br> <span style="color: rgb(0, 43, 0);">- Без декораций CSS</span>',
    '# text-decoration: underline; <br> <span style="color: rgb(0, 43, 0);">- Подчеркивание снизу CSS</span>',
    '# line-height: 0.8; <br> <span style="color: rgb(0, 43, 0);">- Отступ между строк CSS</span>',
    '# text-shadow: 3px 2px 5px red; <br> <span style="color: rgb(0, 43, 0);">- Тень текста CSS</span>',
    '# font-size: 40px; <br> <span style="color: rgb(0, 43, 0);">- Размер шрифта CSS</span>',
    '# font-weight: bold; <br> <span style="color: rgb(0, 43, 0);">- Жирный шрифт CSS</span>',
    '# font-family: "Times New Roman", Times, serif; <br> <span style="color: rgb(0, 43, 0);">- Установить шрифт CSS</span>',
    '# @font-face {<br># &emsp;&emsp;font-family: "nameFont";<br># &emsp;&emsp;src: url("nameFontFile.ttf");<br># } <br> <span style="color: rgb(0, 43, 0);">- Подключить свой шрифт CSS</span>',
    '# display: inline; <br> <span style="color: rgb(0, 43, 0);">- Элементы в линию CSS</span>',
    '# display: inline-block; <br> <span style="color: rgb(0, 43, 0);">- Элемент в линию с увеличением по вертикали как блок CSS</span>',
    '# display: block; <br> <span style="color: rgb(0, 43, 0);">- Элементы блоком CSS</span>',
    '# display: none; <br> <span style="color: rgb(0, 43, 0);">- Не отображать элемент CSS</span>',
    '# visibility: hidden; <br> <span style="color: rgb(0, 43, 0);">- Скрыть элемент с сохранением пространства CSS</span>',
    '# position: static; <br> <span style="color: rgb(0, 43, 0);">- Обычное позиционирование CSS</span>',
    '# position: relative;  <br> <span style="color: rgb(0, 43, 0);">- Позиция относительно родительского объекта (относительное) CSS</span>',
    '# position: fixed; <br> <span style="color: rgb(0, 43, 0);">- Фиксированная позиция на экране CSS</span>',
    '# bottom: 0; <br># right: 0; <br># left: 0; <br># top: 0; <br> <span style="color: rgb(0, 43, 0);">- Расстояние от края экрана для позиций fixed и absolute CSS</span>',
    '# position: absolute; <br> <span style="color: rgb(0, 43, 0);">- Абсолютная позиция относительно родительского элемента с относительной позицией CSS</span>',
    '# position: sticky; <br> <span style="color: rgb(0, 43, 0);">- Прилепить к верху экрана CSS</span>',
    '# overflow: hidden; <br> <span style="color: rgb(0, 43, 0);">- Контент не вылезает за пределы окна, полоса прокрутки скрыта CSS</span>',
    '# overflow: scroll; <br> <span style="color: rgb(0, 43, 0);">- Полоса прокрутки отображается CSS</span>',
    '# overflow-x: scroll; <br> <span style="color: rgb(0, 43, 0);">- Горизонтальная полоса прокрутки CSS</span>',
    '# left: 50%; <br># top: 50%; <br># transform: translate(-50%, -50%); <br> <span style="color: rgb(0, 43, 0);">- Выравнивание блока с позицией absolute по центру CSS</span>',
    '# div p {background-color: yellow;} <br> <span style="color: rgb(0, 43, 0);">- Выбирает элемент р находящийся внутри элемента div CSS</span>',
    '# div + p {background-color: yellow;} <br> <span style="color: rgb(0, 43, 0);">- Первый элемент р после элемента div CSS</span>',
    '# div ~ p {background-color: yellow;} <br> <span style="color: rgb(0, 43, 0);">- Все элементы р после элемента div CSS</span>',
    '# p:first-child {color: blue;} <br> <span style="color: rgb(0, 43, 0);">- Первый элемент р CSS</span>',
    '# p i:first-child {color: blue;} <br> <span style="color: rgb(0, 43, 0);">- Первый элемент i внутри элементов p CSS</span>',
    '# p:first-child i {color: blue;} <br> <span style="color: rgb(0, 43, 0);">- Все элементы i внутри первого элемента p CSS</span>',
    '# opacity: 0.5; <br> <span style="color: rgb(0, 43, 0);">- Прозрачность элемента от 0 до 1 CSS</span>',
    '# input[type=text] {width: 100%;} <br> <span style="color: rgb(0, 43, 0);">- Выбрать input с типом text CSS</span>',
    '# input[type=text]:focus {background-color: lightblue;} <br> <span style="color: rgb(0, 43, 0);">- Выбранный input CSS</span>',
    '# resize: none; <br> <span style="color: rgb(0, 43, 0);">- Запретить изменение размера textarea. CSS</span>',
    '# vh <br> <span style="color: rgb(0, 43, 0);">- % от размера экрана CSS</span>',
    '# border-radius: 25px 25px 25px 25px; <br> <span style="color: rgb(0, 43, 0);">- Все четыре стороны слева на право CSS</span>',
    '# box-shadow: 10px 10px 5px grey; <br> <span style="color: rgb(0, 43, 0);">- Тень для блока CSS</span>',
    '# object-fit: cover; <br> <span style="color: rgb(0, 43, 0);">- Вмещает фотографию в размер бокса CSS</span>',
    '# resize: horizontal; <br> <span style="color: rgb(0, 43, 0);">- Изменять горизонтально CSS</span>',
    '# resize: vertical; <br> <span style="color: rgb(0, 43, 0);">- Изменять вертикально CSS</span>',
    '# @media screen and (max-width: 600px) {} <br> <span style="color: rgb(0, 43, 0);">- Если экран меньше или равен 600 пикселей CSS</span>',
    '# &lt;html lang="ru-RU"></html> <br> <span style="color: rgb(0, 43, 0);">- Основной тег документа и объявление языка и страны (ru - язык; RU - страна) HTML</span>',
    '# &lt;!DOCTYPE html> <br> <span style="color: rgb(0, 43, 0);">- Объявление версии документа HTML5</span>',
    '# &lt;meta charset="UTF-8"> <br> <span style="color: rgb(0, 43, 0);">- Объявление кодировки страницы HTML</span>',
    '# &lt;meta name="discription" content="Learn HTML"> <br> <span style="color: rgb(0, 43, 0);">- Описание страницы HTML</span>',
    '# &lt;meta name="keywords" content="HTML"> <br> <span style="color: rgb(0, 43, 0);">- Ключевые слова для поисковых роботов HTML</span>',
    '# &lt;input type="text"> <br> <span style="color: rgb(0, 43, 0);">- Текстовое поле HTML</span>',
    '# maxlength="" <br> <span style="color: rgb(0, 43, 0);">- Атрибут инпута, максимальная длина текста в поле HTML</span>',
    '# pointer-events: none; <br> <span style="color: rgb(0, 43, 0);">- Сделать блок прокликивающимся CSS</span>',
    '# @import "file.scss"; <br> <span style="color: rgb(0, 43, 0);">- Подключение файлов SASS</span>',
    '# div {<br># &emsp;&emsp; span {<br># &emsp;&emsp;&emsp;&emsp; color: red;<br># &emsp;&emsp; }<br># }<br> <span style="color: rgb(0, 43, 0);">- Вложенность SASS</span>',
    '# &:hover {color: blue;} <br> <span style="color: rgb(0, 43, 0);">- Обратиться к верхнему уровню вложенности SASS</span>',
    '# $var: 100px; <br> <span style="color: rgb(0, 43, 0);">- Переменные SASS</span>',
    '# %tpl_border {} <br># @extend %tpl_border; <br> <span style="color: rgb(0, 43, 0);">- Шаблоны SASS</span>',
    '# @mixin name($font, $color){<br># &emsp;&emsp; font-size: $font;<br># &emsp;&emsp; color: $color;<br># }<br># @include name(24px, blue);<br> <span style="color: rgb(0, 43, 0);">- Миксины SASS</span>',
    '# width: 300px / 960px * 100%; <br> <span style="color: rgb(0, 43, 0);">- Вычисления SASS</span>',
    '# // Комментарий после двойного слеша. <br> <span style="color: rgb(0, 43, 0);">- Комментарий SASS</span>',
    '# git init <br> <span style="color: rgb(0, 43, 0);">- Подключить проект к GIT</span>',
    '# git status <br> <span style="color: rgb(0, 43, 0);">- Проверка статуса GIT</span>',
    '# git add . <br> <span style="color: rgb(0, 43, 0);">- Добавить файлы GIT</span>',
    '# git commit -m "name commit" <br> <span style="color: rgb(0, 43, 0);">- Добавить коммит GIT</span>',
    '# git remote <br> <span style="color: rgb(0, 43, 0);">- - Получение информации о репозитории GIT</span>',
    '# git push -u origin main <br> <span style="color: rgb(0, 43, 0);">- Добавить новую ветку в репозиторий GIT</span>',
    '# git push origin main <br> <span style="color: rgb(0, 43, 0);">- Добавить коммит в репозиторий GIT</span>',
    '# git branch new_branch_name <br> <span style="color: rgb(0, 43, 0);">- Создание новой ветки GIT</span>',
    '# git checkout -b new_branch_name <br> <span style="color: rgb(0, 43, 0);">- Переход на новую ветку GIT</span>',
    '# git branch <br> <span style="color: rgb(0, 43, 0);">- Просмотр списка веток GIT</span>',
    '# git branch -d existing_branch_name <br> <span style="color: rgb(0, 43, 0);">- Удаление ветки GIT</span>',
    '# git pull <br> <span style="color: rgb(0, 43, 0);">- Получение изменений из удаленного репозитория GIT</span>',
    '# git merge origin <br> <span style="color: rgb(0, 43, 0);">- Слияние удаленного репозитория и локального GIT</span>',
    '# git remote add name https://github.com/name/project.git <br> <span style="color: rgb(0, 43, 0);">- Подключить проект к репозиторию GIT</span>',
    '# git branch -M main <br> <span style="color: rgb(0, 43, 0);">- Создать ветку в проекте GIT</span>',
    '# editor.hover.enable <br> <span style="color: rgb(0, 43, 0);">- Отключить подсказки в VS Code</span>'
];

let arrChat = [
    '# How are you?',
    '# I worked in the office all day yesterday.',
    '# It would be better if we took a day off.',
    '# Upload new data to the server.',
    '# I don\'t understand what you want to do.',
    '# Select the desired file and send it.',
    '# You need to find a way out of the maze.',
    '# It\'s all about what you think.',
    '# Never mind, we need to move on.',
    '# Tell me how you came up with this?',
    '# Call me tonight.',
    '# Have you forgotten about our meeting?',
    '# What\'s playing on your speakers now?',
    '# Where can I find the right department of the store?',
    '# You need to go to the library.',
    '# Accelerate to maximum speed.',
    '# Don\'t leave your house for the next three days.',
    '# There must be an idea in all this.',
    '# You may get fired, but you are a good employee.',
    '# You do the best job in the company.',
    '# You\'re annoying me, get away from me.',
    '# Mom decided to make a delicious pie.',
    '# My grandmother died a couple of years ago.',
    '# We are all afraid of war.',
    '# People die all the time.',
    '# I need to study a lot to become successful.',
    '# It\'s good when you have a job.',
    '# Just try to tell everything correctly.',
    '# I don\'t know how to complete this task.',
    '# I\'m having difficulty accessing the program.',
    '# The sunlight is so bright it blinds me.',
    '# My eyes see everything around.',
    '# Never give up or give up.',
    '# You can do anything you set your mind to.',
    '# Don\'t lose sight of your goal and go towards it.',
    '# Yesterday we bought a couple of bottles of beer and sat in front of the TV all day.',
    '# I bought myself a gym membership and go there three times a week.',
    '# If you want to lose weight, you need to exercise regularly.',
    '# The news said that starting next month our pensions will be raised.',
    '# Crime detection has increased in the city.',
    '# I\'m glad that you remember me.',
    '# In this world, everything rests on trust.',
    '# I decided to pour myself a cup of strong tea.',
    '# Don\'t forget to buy milk and sausages at the store.',
    '# My friend and I decided to renovate, and now we have already hung wallpaper in the living room.',
    '# Yesterday I worked at a construction site, carrying bags of cement to the fifth floor.',
    '# This is an eternal question that haunts me.',
    '# Congratulate me, I got married yesterday.',
    '# I think this is the best day of my life.',
    '# We have no choice but to leave here forever.',
    '# My cat sits on the windowsill by the window all day.',
    '# Wait ten minutes, I need to walk the dog.',
    '# Yesterday I lost a pack of cigarettes somewhere.',
    '# Today I was riding on the bus, and I saw a huge snake in a passenger\'s cage.',
    '# We jumped from a waterfall when we were on vacation.',
    '# Do you like to relax by the sea?',
    '# Do you remember where your house is?',
    '# In my youth, I often went to play at the computer club.',
    '# The governor told our newspaper about what the government plans to do in the city next year.',
    '# I like watching boxing on the sports channel.',
    '# It\'s hard for me to be here all day long.',
    '# I would like to be rich and travel a lot.',
    '# Type a couple of unique phrases.',
    '# Open a browser window, find the site you want and read what it says.',
    '# Several talented teenagers performed at the talent show.',
    '# If you know English, it will be easier for you in life and work.',
    '# Yesterday we rented a double room at the hotel for one night.',
    '# Don\'t be late for dinner, it will be at eight o\'clock in the evening.',
    '# I\'ll write a new function into the command line and execute it to get the result.',
    '# Don\'t worry about all this, I\'ll fix it in minutes.',
    '# She decided to cook potatoes and meat for dinner.',
    '# Before training you need to do a warm-up.',
    '# In a few years I will be a cool programmer, or a hacker.',
    '# If I have a high salary, I can think about buying myself a car or building a house.',
    '# Neighbors love to dig in their garden all day long.',
    '# A beautiful girl was lying on a sun lounger near the pool.',
    '# These shoes are too small for me, they squeeze and I can\'t walk.',
    '# This word has three extra letters, find them.',
    '# Download the archiver, and then create a couple of copies of the archive.',
    '# Let\'s play this game together.',
    '# I dug a huge hole in my backyard yesterday.',
    '# The thief tried to climb through the window, but got stuck, and the police caught him.',
    '# Fraudsters entered the store and stole ten packs of pasta.',
    '# This is very important information that needs to be passed on.',
    '# Everything is going as it should at the control headquarters.',
    '# Kings don\'t play stupid games.',
    '# How do you feel about going to the theater tonight?',
    '# I\'ve been hanging around the street all night with nothing to do.',
    '# I see you, you are beautiful, you are like my childhood dream.',
    '# These systems have important implementation and overall potential.',
    '# How many words do you need to communicate freely?',
    '# I don\'t insist, but maybe you know how it happened?',
    '# Buy me some ice cream and then let\'s go for a walk somewhere.',
    '# You need to learn to work in a notebook, writing down all your thoughts.',
    '# Behind this fence begins the wild and dangerous world of dinosaurs.',
    '# There was a strange old painting hanging on the wall.',
    '# Step back and say a few words while raising your hands.',
    '# He had a gun, I got scared and fell to the ground.',
    '# Hey you, come on, come here to me!',
    '# What do you want from me? Back off.',
    '# Don\'t listen to him, he\'s always talking nonsense.',
    '# I\'d rather eat my slippers than work for this guy.',
    '# Our capabilities are limited, we must save our resources.',
    '# Your hat is on your head crookedly.',
    '# Just try this and I\'ll sue you.',
    '# You need to collect all the necessary documents and submit them within a week.',
    '# These are all excuses, if you wanted, you would have already done everything.',
    '# First finish the old task, and then start doing the new one.',
    '# Hello! How are you?',
    '# What\'s new?',
    '# How was your day?',
    '# Do you know something interesting?',
    '# Wow, what a weather today!',
    '# Have you heard new music?',
    '# What funny happened recently?',
    '# How do you feel about coffee?',
    '# Where do you usually spend your weekends?',
    '# Do you have any plans for the evening?',
    '# How are your pets?',
    '# Have you seen the latest movie with your favorite actors?',
    '# What would you choose: mountains or sea?',
    '# How are your loved ones?',
    '# What books have you been reading lately?',
    '# How is you travelling?',
    '# How are your studies/work?',
    '# Noticed anything unusual lately?',
    '# How are your New Year\'s plans?',
    '# What would you do if you won the lottery?',
    '# Hello! How are you doing?',
    '# Hello! Everything is fine, thank you. And you?',
    '# I recently watched a cool movie. I recommend!',
    '# Oh, which one? What\'s interesting?',
    '# It was an adventure film. Lots of action and unexpected twists.',
    '# Sounds exciting. Where did you find it?',
    '# Friends advised. They always know what to watch.',
    '# I had a great holiday over the weekend. Go to the park.',
    '# What was the weather?',
    '# Sunny and warm. Ideal time for a walk.',
    '# I also like autumn. What other plans did you have?',
    '# We went into a cafe. We discovered delicious tea.',
    '# And I recently started reading a new book. Fascinating story.',
    '# What name has this book? Maybe I should read it too.',
    '# "Shadow of the Wind" by Carlos Ruiz Zafon. Highly recommend.',
    '# Thanks for the recommendation! I love reading.',
    '# How was your working day?',
    '# Busy, but managed. Any news?',
    '# Have you heard about the new restaurant that opened recently?',
    '# No, tell me more! What\'s their menu?',
    '# They have a variety of dishes from Italian pasta to sushi.',
    '# Sounds delicious. Let\'s meet there next time.',
    '# I noticed that you have a new hairstyle. Looks cool!',
    '# Thank you! I decided to change something in my image.',
    '# How did you spend your weekend? Did something interesting happen?',
    '# Met with old friends. We had a fun time.',
    '# I also met friends. We went to the cinema.',
    '# What movie did you watch? Maybe it\'s worth watching it?',
    '# "Star Wars: The Last Jedi." Very cool episode.',
    '# I love Star Wars! Let\'s watch it together next time.',
    '# What are your plans for the coming weekend?',
    '# I am planning to visit the museum. They have a new exhibition.',
    '# Sounds exciting. Maybe I\'ll join too?',
    '# Certainly! I will be glad to have company.',
    '# How do you feel about traveling?',
    '# I love traveling! What are your favorite places?',
    '# I dream of visiting Japan and Italy. And do you have a dream place?',
    '# I want to go to Australia. I love nature and exotic animals.',
    '# My family and I are planning a trip for the summer. What places do you recommend?',
    '# If you love nature, be sure to visit Banff National Park in Canada.',
    '# Sounds great! Thanks for the recommendation.',
    '# Cheers! You will have a great time.',
    '# How are your hobby activities going?',
    '# Amazing! I have already started learning new techniques.',
    '# This sounds exciting. What are you creating?',
    '# I\'m still working on the painting. I want to do something unique.',
    '# You are so creative! It\'s very interesting to see the result.',
    '# As soon as I\'m done, I\'ll show you. Do you also do some kind of creative work?',
    '# Yes, I love taking photographs. Now I\'m experimenting with a new camera.',
    '# Great! Be sure to share your work.',
    '# Divide all your money into three parts.',
    '# Put together all the parts of this engine.',
    '# I think you\'re right. Keep up the good work.',
    '# Yesterday I saw two white cats in the attic of our house.',
    '# A large owl was sitting on the branches of an old tree.',
    '# The TV is showing old TV shows again that I\'m tired of.',
    '# Don\'t do nonsense, just take a break from it all.',
    '# I spent a whole month in the hospital.',
    '# I need to go to the pharmacy to get some pills.',
    '# Tomorrow I need to have an injection of medicine.',
    '# This drug does not dissolve in water.',
    '# He flies in the sky like a great white bird.',
    '# Count to one hundred and look at the stars that shine above your head.',
    '# Unwrap this package and take out an ancient knife from it.',
    '# Take a spoon and pour sugar into your tea.',
    '# Place the pot of soup on the gas stove.',
    '# I don\'t like violence.',
    '# You need to eat a lot.',
    '# Drink a liter of water.',
    '# This guy has a new car.',
    '# He doesn\'t understand anything.',
    '# I have three pills for you.',
    '# He must complete this task.',
    '# We are entrusted with a great mission.',
    '# In Diablo two my least favorite city is the third.',
    '# Go sell all your junk to the store.',
    '# A soul hunter has arrived in a ghostly city on the river.',
    '# We walked down the hill and sat on the grass all day.',
    '# Let\'s drink wine, eat meat and watch TV.',
    '# I\'m tired of this mess in my apartment.',
    '# I need to make a shopping list for tomorrow.',
    '# Look back and you will see me walking behind you.',
    '# Loneliness drives you crazy.',
    '# The rest of my days I will work and eat delicious food.'
];

function showLine(){
    let block = document.querySelectorAll('.main-block');
    
    let arrSet;

    if ((Math.random() * (100 - 1)) + 1 < 50) {
        arrSet = arrCode;
    } else {
        arrSet = arrChat;
    }

    block[0].innerHTML += '<div class="message">' + arrSet[Math.floor(Math.random() * (arrSet.length - 0)) + 0] + '</div>';
    window.scrollBy({top: 10000});

}

setInterval(showLine, 3000);