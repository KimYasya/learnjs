"use strict"

// Куда будет произведена запись?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// запись идет только в rabbit