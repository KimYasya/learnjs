"use strict"

console.group("Вывести простые числа");

let num = 10;

NextNum:
for (let i = 2; i <= num; i++) { 
  for (let b = 2; b < i; b++) {
    if (i % b == 0) { 
     continue NextNum;
    } 
  }
  console.log(i); 
}

console.groupEnd();