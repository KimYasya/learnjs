"use strict"

// Хранение времени прочтения

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let messageWasRead = new Map();

// readMap.set(message, date); записали сообщение в коллекцию