let arrCode = [
    '"use strict"; - строгий режим',
    'let nameOfVariable = 25; - переменная',
    'const nameOfConstanta = "notChange"; - константа',
    'let nameOfArray = [<br>&emsp;&emsp;"one",<br> &emsp;&emsp;"two",<br> &emsp;&emsp;3<br>]; - массив',
    'let nameOfObject = {<br>&emsp;&emsp;Юone : "one",<br> &emsp;&emsp;two : "two",<br> &emsp;&emsp;three : 3}; - объект',
    'function nameOfFunction(dataOne, dataTwo){}; - функция ',
    'let func = (dataOne, dataTwo) => {}; - стрелочная функция',
    'element.setAttribute("onclick", "func()"); - добавить атрибут',
    'element.removeAttribute("disabled", "disabled"); - удалить атрибут',
    'if (name == "one"){<br>&emsp;&emsp;Выполнится этот код.<br>} else {<br>&emsp;&emsp;Или этот код.<br>}; - выбор',
    'switch(data){<br> &emsp;&emsp;case 4:<br> &emsp;&emsp;&emsp;&emsp;Выполнится этот код.<br> &emsp;&emsp;break;<br> &emsp;&emsp;default;<br> }; - выбор',
    'let nameOfVariable = 21 > 18 ? true : false; - короткая запись if else',
    'for (let i = 0; i < 10; i++) {}; - цикл',
    'for (let i in person) { <br>&emsp;&emsp;data += person[i]; <br>}; - цикл for in',
    'document.querySelectorAll(".classCSS"); - получить элемент по классу',
    'document.querySelector("#idCSS"); - получить элемент по ID',
    'console.log("Данные выводимые в консоль"); - вывести лог в консоль',
    'let packData = new Error().stack; - получить данные о выполненой операции',
    'window.close(); - закрыть страницу',
    'window.open("www.adress.ru"); - открыть страницу',
    'String(data); - преобразует в строку',
    'Number(data); - преобразует в число',
    'element.classList.add("class"); - добавить класс',
    'element.classList.remove("class"); - удалить класс',
    'element.classList.toogle("class"); - сменить класс',
    'num.toFixed(0); - округлить до целого с числами после запятой',
    'arr.includes(777); - проверяет наличие элемента в массиве',
    'arr.join(", "); - преобразовать массив в строку с разделителем',
    'str.trim(); - удалить пробелы в начале и конце строки',
    'str.split(","); - разбить строку в массив по символу разделителю',
    'if(checkbox.checked == true); - проверка чекбокса',
    'if(select.selectedIndex == 1); - проверка элемента списка',
    'window.scrollBy({top: -10000}); - прокрутить вверх',
    'Math.floor(Math.random() * (max - min)) + min; - рандомное число',
    'document.querySelector("#id").innerHTML; - вставить контент',
    'localStorage.setItem("test", 1); - записать в локальное хранилище',
    'const location = window.location.href; - получить URL',
    'localStorage.getItem("test"); - получить из локального хранилища',
    'const screenWidth = window.screen.width; / height; - получить высоту и ширину окна',
    'color: hsla(9, 100%, 64%, 1); - цвет текста',
    'background-color: black; - Цвет фона',
    'background-image: url("img_tree.png"); - Изображение фона',
    'background-repeat: no-repeat; - Повторение фона',
    'border: 5px solid red; - Сокращенная форма объявления границы',
    'margin: 100px 150px 100px 80px; - Внешние отступы со всех сторон начиная с верхнего',
    'padding: 25px 50px 75px 100px; - Внутренние отступы со всех сторон начиная с верхнего',
    'width: 50%; - Ширина',
    'height: 200px; - Высота',
    'min-width: 500px; - Минимальная ширина',
    'max-width: 500px; - Максимальная ширина',
    'text-decoration: none; - Без декораций',
    'text-decoration: underline; - Подчеркивание снизу',
    'line-height: 0.8; - Отступ между строк',
    'text-shadow: 3px 2px 5px red; - Тень текста',
    'font-size: 40px; - Размер шрифта',
    'font-weight: bold; - Жирный шрифт',
    'font-family: "Times New Roman", Times, serif; - Установить шрифт',
    '@font-face {<br>&emsp;&emsp;font-family: "nameFont";<br>&emsp;&emsp;src: url("nameFontFile.ttf");<br></br>} - Подключить свой шрифт',
    'display: inline; - Элементы в линию',
    'display: inline-block; - Элемент в линию с увеличением по вертикали как блок',
    'display: block; - Элементы блоком',
    'display: none; - Не отображать элемент',
    'visibility: hidden; - Скрыть элемент с сохранением пространства',
    'position: static; - Обычное позиционирование',
    'position: relative;  Позиция относительно родительского объекта (относительное)',
    'position: fixed; - Фиксированная позиция на экране',
    'bottom: 0; <br>right: 0; <br>left: 0; <br>top: 0; - Расстояние от края экрана для позиций fixed и absolute',
    'position: absolute; - Абсолютная позиция относительно родительского элемента с относительной позицией',
    'position: sticky; - Прилепить к верху экрана',
    'overflow: hidden; - Контент не вылезает за пределы окна, полоса прокрутки скрыта',
    'overflow: scroll; - Полоса прокрутки отображается',
    'overflow-x: scroll; - Горизонтальная полоса прокрутки',
    'left: 50%; <br>transform: translate(-50%, 0); - Выравнивание блока с позицией absolute по центру',
    'div p {background-color: yellow;} - Выбирает элемент р находящийся внутри элемента div',
    'div + p {background-color: yellow;} - Первый элемент р после элемента div',
    'div ~ p {background-color: yellow;} - Все элементы р после элемента div',
    'p:first-child {color: blue;} - Первый элемент р',
    'p i:first-child {color: blue;} - Первый элемент i внутри элементов p',
    'p:first-child i {color: blue;} - Все элементы i внутри первого элемента p',
    'opacity: 0.5; - Прозрачность элемента от 0 до 1',
    'input[type=text] {width: 100%;} - Выбрать input с типом text',
    'input[type=text]:focus {background-color: lightblue;} - Выбранный input',
    'resize: none; - Запретить изменение размера textarea.',
    'vh - % от размера экрана',
    'border-radius: 25px 25px 25px 25px; - Все четыре стороны слева на право',
    'box-shadow: 10px 10px 5px grey; - Тень для блока',
    '@font-face {<br>&emsp;&emsp;font-family: myFirstFont;<br>&emsp;&emsp;src: url(sansation_light.woff);<br>} - Подключить свой шрифт',
    'object-fit: cover; - Вмещает фотографию в размер бокса',
    'resize: horizontal; - Изменять горизонтально',
    'resize: vertical; - Изменять вертикально',
    '@media screen and (max-width: 600px) {} - Если экран меньше или равен 600 пикселей',
];

let boxCode = [
    '# if (num === 0) {<br>' +
    '# &emsp;&emsp; let randomNum = Math.floor(Math.random() * (99 - 1)) + 1;<br>' +
    '# } else if (num === 1) {<br>' +
    '# &emsp;&emsp; let randomNum = Math.floor(Math.random() * (199 - 100)) + 100;<br>' +
    '# } else {<br>' +
    '# &emsp;&emsp; let randomNum = 0<br>' +
    '#}'
];

function showLine(){
    let block = document.querySelectorAll('.main-block');

    //block[0].innerHTML += '<div class="message">' + arrCode[Math.floor(Math.random() * (arrCode.length - 0)) + 0] + '</div>';
    block[0].innerHTML += '<div class="message">' + boxCode[0] + '</div>';
    window.scrollBy({top: 10000});

}

setInterval(showLine, 5000);