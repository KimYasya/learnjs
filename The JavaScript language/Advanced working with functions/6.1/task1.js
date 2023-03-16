"use strict"

// Вычислить сумму чисел до данного


// цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(100));

// рекурсия
function sumTo(n) {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
}

alert(sumTo(100));

// формула, самый быстрый способ решения
function sumTo(n) {
  return n * (n + 1) / 2;
}

alert(sumTo(100));


// Можно ли при помощи рекурсии посчитать sumTo(100000) - нет. максимальный размер стека превышен. 

