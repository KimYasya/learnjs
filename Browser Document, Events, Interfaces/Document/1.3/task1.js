"use strict"

// Дочерние элементы в DOM

{/* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html> */}

// DOM-узел элемента <div>:

document.body.firstElementChild
document.body.children[0]

// DOM-узел элемента <ul>:

document.body.lastElementChild
document.body.children[1]

// Второй <li> (с именем Пит):

document.body.lastElementChild.lastElementChild