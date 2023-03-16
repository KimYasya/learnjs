"use strict";

// Перемешайте массив

console.group("Перемешайте массив");

let arr = [1, 2, 3];

function shuffle(arr) {
  let m = arr.length,
    t,
    i;

  // Пока есть элементы для перемешивания
  while (m) {
    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
}
shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

console.groupEnd();
