"use strict"

// Какой обработчик запустится?

button.addEventListener("click", () => alert("1")); // этот сработает, выведет 1

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2); // этот сработает, выведет 2