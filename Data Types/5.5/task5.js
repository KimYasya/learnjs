"use strict"

// Скопировать и отсортировать массив

console.group("Скопировать и отсортировать массив");

const arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let newArr = [];

  return newArr = arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted.join(", ")); // CSS, HTML, JavaScript
console.log(arr.join(", ")); // HTML, JavaScript, CSS (без изменений)

console.groupEnd();