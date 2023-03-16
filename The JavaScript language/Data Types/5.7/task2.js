"use strict"

// Отфильтруйте анаграммы

console.group("Отфильтруйте анаграммы");

function aclean(arr) {
  let newArr = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    newArr.set(sorted, word);
  }

  return Array.from(newArr.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

console.groupEnd();