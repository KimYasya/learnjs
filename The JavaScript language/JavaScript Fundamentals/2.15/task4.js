"use strict";

//Функция pow(x,n)

let x = prompt("введите число");
let n = prompt("в какую степень возводим?");

function pow(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result *= a;
  }

  return result;
}

if (n < 1) {
  alert(`${n} не натуральное число, попробуйте еще раз`);
} else {
  alert(pow(x, n));
}

