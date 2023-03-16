"use strict";

// Подсчёт количества свойств объекта

console.group("Подсчёт количества свойств объекта");

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

// или

// function count(obj) {
//   let countKeys = 0;

//     for (let key of Object.values(user)) {
//       countKeys++;
//     }

//     return countKeys;
//   }

console.log(count(user));

console.groupEnd();
