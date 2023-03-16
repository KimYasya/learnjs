"use strict";

// Трансформировать в массив имён

console.group("Трансформировать в массив имён");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names); // Вася, Петя, Маша

console.groupEnd();
