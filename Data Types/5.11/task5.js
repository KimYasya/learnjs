"use strict";

// Последнее число месяца?

console.group("Последнее число месяца?");

function getLastDayOfMonth(year, month) {
  let nextMonthDay = new Date(year, month + 1);

  nextMonthDay.setDate(nextMonthDay.getDate() - 1);
  return nextMonthDay.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

console.groupEnd();
