"use strict"

console.group("Выведите чётные числа");

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0 )
    console.log(i);
}

console.groupEnd();