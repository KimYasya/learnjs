"use strict"

// Фильтрация по диапазону "на месте"

console.group("Фильтрация по диапазону на месте");

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 
console.log(arr.join(", "));

console.groupEnd();