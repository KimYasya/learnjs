"use strict"

// Армия функций

console.group("Армия функций");

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// переменная i вне цикла, поэтому значения всегда одинаковые. ее нужно помесстить в цикл, чтобы все заработало

function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { 
      console.log( i ); 
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

console.groupEnd();