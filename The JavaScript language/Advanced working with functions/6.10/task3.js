"use srtict"

// Свойство функции после bind

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?

// Ответ: undefined. Результатом работы bind является объект bound. У него нет свойства test.