"use strict"

// Создайте новый объект с помощью уже существующего

// let obj2 = new obj.constructor();

function User(name) {
  this.name = name;
}

let user = new User("Yana");
let user2 = new user.constructor("Mitya");

console.log(user2.name); // Mitya
