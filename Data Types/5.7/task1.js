"use strict"

// Фильтрация уникальных элементов массива

console.group("Фильтрация уникальных элементов массива");

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O


console.groupEnd();