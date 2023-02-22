"use strict"

// Создайте калькулятор

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("введите число a");
    this.b = +prompt("введите числа b");
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );