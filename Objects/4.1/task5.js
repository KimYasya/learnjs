"use strict"

// Умножаем все числовые свойства на 2

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(a) {
  for (let key in a) {
    if (typeof a[key] === number) {
      a[key] *= 2;
    }
  }
}