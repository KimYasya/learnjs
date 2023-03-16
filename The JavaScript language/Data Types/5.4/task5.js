"use strict";

// Подмассив наибольшей суммы

console.group("Подмассив наибольшей суммы");

let newArr = [1, -2, 3, 4, -9, 6];

function getMaxSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(getMaxSum(newArr));

console.groupEnd();
