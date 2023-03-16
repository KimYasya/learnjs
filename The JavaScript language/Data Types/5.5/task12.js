"use strict";

// Оставить уникальные элементы массива

console.group("Оставить уникальные элементы массива");

function unique(arr) {
  let uniqueStr = [];

  for (let str of arr) {
    if (!uniqueStr.includes(str)) {
      uniqueStr.push(str);
    }
  }

  return uniqueStr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O

console.groupEnd();
