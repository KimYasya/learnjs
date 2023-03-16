"use strict"

// Декоратор-шпион

function spy(func) {

  function wrapper(...more) {

    wrapper.calls.push(more);
    return func.apply(this, more);
  }

  wrapper.calls = [];

  return wrapper;
}