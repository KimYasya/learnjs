"use strict"

// Создайте калькулятор при помощи конструктора, new Calculator

function Calculator() {

  this.read = function() {
    this.a = +prompt("введите число a");
    this.b = +prompt("введите число b");
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );