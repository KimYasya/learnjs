"use strict"

// Декоратор debounce

function debounce(f, ms) {

  let result = false;

  return function() {
    if (result) return;

    f.apply(this, arguments);

    result = true;

    setTimeout(() => result = false, ms);
  };

}