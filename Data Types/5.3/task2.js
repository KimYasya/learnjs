"use strict"

// Проверка на спам

console.group("Проверка на спам")

function checkSpam(str) {
  let newStr = str.toLowerCase();
   if (newStr.includes("viagra") || newStr.includes("xxx")) {
    return true;
   } else {
    return false;
   }
}

let firstMess = "buy ViAgRA now";
let secondMess = "free xxxxx";
let thirdMess = "innocent rabbit"

console.log(checkSpam(firstMess));
console.log(checkSpam(secondMess));
console.log(checkSpam(thirdMess));

console.groupEnd();