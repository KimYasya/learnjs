"use strict"

// Усечение строки

console.group("Усечение строки");

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…' 
  }  else {
    return str;
  }
}
let message = "Вот, что мне хотелось бы сказать на эту тему:";
let anotherMessage = "Всем привет!";

console.log(truncate(message, 20));
console.log(truncate(anotherMessage, 20));

console.groupEnd();