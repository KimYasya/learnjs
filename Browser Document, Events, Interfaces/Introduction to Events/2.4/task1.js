"use strict";

// Почему не работает return false?

// возвращаемое значение handler() не влияет на результат, т.к. не используется

function handler(event) {
  alert("...");
  event.preventDefault(); // отменяем стандартное поведение через event.preventDefault
}

<a href="https://w3.org" onclick="handler(event)">
  w3.org
</a>;
