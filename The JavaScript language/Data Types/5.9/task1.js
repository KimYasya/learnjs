"use strict";

// Сумма свойств объекта

console.group("Сумма свойств объекта");

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;

  for (let salarie of Object.values(salaries)) {
    sum += salarie;
  }

  return sum;
}

console.log("Сумма зарплат: ", sumSalaries(salaries));

console.groupEnd();
