"use strict"

// Сделать первый символ заглавным

console.group("Сделать первый символ заглавным")

function ucFirst(str) {
  return str = str[0].toUpperCase() + str.slice(1);
}

let name = "арсений"

console.log(ucFirst(name))

console.groupEnd();