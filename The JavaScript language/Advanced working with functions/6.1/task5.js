// Вывод односвязного списка в обратном порядке

console.group("Вывод односвязного списка в обратном порядке");

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

  function printRevList(list) {
    let arr = [];
    let element = list;
  
    while (element) {
      arr.push(element.value);
      element = element.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }

  }

  printRevList(list);

  console.groupEnd();


  console.group("рекурсия");

  function printRevListTwo(list) {

    if (list.next) {
      printRevListTwo(list.next);
    }
  
    console.log(list.value);

  }

  printRevListTwo(list);

  console.groupEnd();

console.groupEnd();
