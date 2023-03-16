"use strict";

// Проверка логина

let password = "Я главный";

let login = prompt("Кто вы?");

if (login === "Админ") {
  let currentPassword = prompt("введите пароль");
  
  if (currentPassword === password) {
    alert("Здравствуйте!");
  } else if (currentPassword === "" || currentPassword === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю!");
}
