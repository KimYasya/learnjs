"use strict"


// функция в if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // ошибка, функция есть только в блок if, внеегоона недоступна