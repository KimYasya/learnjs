"use strict"

// Какой день месяца был много дней назад?

console.group("Какой день месяца был много дней назад?");

function getDateAgo(date, days) {
  let prevDate = new Date(date);

  prevDate.setDate(date.getDate() - days);
  return prevDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

console.groupEnd();