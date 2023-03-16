"use sreict";

// Вывод односвязного списка

console.group("Вывод односвязного списка");

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

  console.group("цикл");

  function printList(list) {
    let element = list;

    while (element) {
      console.log(element.value);
      element = element.next;
    }
  }

  printList(list);

  console.groupEnd();


  console.group("рекурсия");

  function printListTwo(list) {

    console.log(list.value); 

    if (list.next) {
      printListTwo(list.next);
    }

  }

  printListTwo(list);

  console.groupEnd();

console.groupEnd();
