"use strict"

// Сортировать по полю

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return function(a, b) {
    
   if (a[field] > b[field]) {
    return 1;
   } 

   return -1;
  } 
}

console.group("sort by name");
users.sort(byField("name"));
users.forEach(user => console.log(user.name)); // Ann, John, Pete
console.groupEnd();

console.group("sort by age");
users.sort(byField("age"));
users.forEach(user => console.log(user.name)); // Pete, Ann, John
console.groupEnd();