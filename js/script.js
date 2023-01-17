"use strict";

// создаем константы
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');


// добавляем действие клик к гамбургеру
hamburger.addEventListener('click', () => {
    // добавляем класс  active
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    // удаляем класс active
    menu.classList.remove('active');
});


// пресчет прцентов
const percents = document.querySelectorAll('.soft__text-percent'),
    lines = document.querySelectorAll('.soft__bar-percent');

percents.forEach((percent, i) => {
    lines[i].style.width = percent.innerHTML;
});
