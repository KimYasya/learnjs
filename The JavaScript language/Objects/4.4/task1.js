"use strict"

// Использование "this" в литерале объекта

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? 

// ошибка. можно вызвать user.name, тогда ответ будет John