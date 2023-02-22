"use strict"

// Сортировать в порядке по убыванию

console.group("Сортировать в порядке по убыванию");

let arr = [5, 2, 1, -10, 8];

function arrSort(a, b) {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
}

arr.sort(arrSort);

console.log(arr.join(", ")); // 8, 5, 2, 1, -10

console.groupEnd();