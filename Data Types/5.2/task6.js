"use strict"

// Случайное целое число от min до max

function randomInteger(min, max) {
  
  let randomNum = Math.random() * (max + 1 - min) + min;
  return Math.floor(randomNum);
}
