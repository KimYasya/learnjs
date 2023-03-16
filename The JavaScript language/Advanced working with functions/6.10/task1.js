"use strict"

// Связанная функция как метод

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

// this = null, функция покажет null