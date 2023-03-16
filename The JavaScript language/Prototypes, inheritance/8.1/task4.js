"use strict"

// Почему наедаются оба хомяка?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? потому что запись шла в hamster.stomach. Чтобы работало как надо, у каждого хомяка делем свой желудок.
alert( lazy.stomach ); // apple

