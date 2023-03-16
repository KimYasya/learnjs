"use strict"

// Фильтрация по диапазону

console.group("Фильтрация по диапазону");

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered.join(", ")); 
console.log(arr.join(", ")); 

console.groupEnd();