"use strict";

// Сумма введённых чисел

console.group("Сумма введённых чисел")

function sumInput() {
  let arr = [];

  while (true) {
    let number = prompt("введите число");
    if (number === "" || number === null || !isFinite(number)) {
      break;
    }
    arr.push(+number);
  }

  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}

console.log(sumInput());

console.groupEnd();
