"use srtict"

// Повторный bind

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();

// выведет Вася
// func запоминает контекст при первом вызове bind, второй ни на что не влияет