"use strict"

// Ввод числового значения

function readNumber() {
  let num = 0;

  do {
    num = prompt("введите число");
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert("вы ввели число", readNumber());