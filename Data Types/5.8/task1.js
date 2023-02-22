"use strict"

// Хранение отметок "не прочитано"

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

alert("Было ли прочитано сообщение?: " + readMessages.has(messages[0])); // true

messages.shift(); // теперь информация о сообщении от Джона удалится и в прочитанных.