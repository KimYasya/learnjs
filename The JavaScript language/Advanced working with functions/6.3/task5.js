"use strict"

// Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7];

// фильтр inBetween
function inBetween(a, b) {
  return function(c) {
    return c >= a && c <= b;
  };
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6


// фильтр inArray
function inArray(arr) {
  return function(c) {
    return arr.includes(c);
  };
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2