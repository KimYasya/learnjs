"use strict";

// Максимальная зарплата

console.group("Максимальная зарплата");

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let maxSalary = 0;
  let maxSalaryName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }

  return maxSalaryName;
}

console.log(topSalary(salaries)); 


console.groupEnd();
