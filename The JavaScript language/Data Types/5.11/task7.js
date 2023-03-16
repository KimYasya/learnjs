"use strict"

// Сколько секунд осталось до завтра?

console.group("Сколько секунд осталось до завтра?");

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
  let secondsToTomorrow = tomorrow - today; 
  
  return Math.round(secondsToTomorrow / 1000); 
}
console.log(getSecondsToTomorrow());

console.groupEnd();
