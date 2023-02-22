"use strict"

// Переведите текст вида border-left-width в borderLeftWidth

console.group("Переведите текст вида border-left-width в borderLeftWidth");

function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

let message = "list-style-image"

console.log(camelize(message));

console.groupEnd();