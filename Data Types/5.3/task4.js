"use strict"

// Выделить число

console.group("Выделить число");

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}

let sum = "$120";

console.log(extractCurrencyValue(sum))

console.groupEnd();