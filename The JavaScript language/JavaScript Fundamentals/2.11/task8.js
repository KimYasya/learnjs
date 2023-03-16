"use strict"

// Вопрос об if

if (-1 || 0) alert( 'first' ); // выполнится, -1 - true 
if (-1 && 0) alert( 'second' ); // не выполнится, 0 - false
if (null || -1 && 1) alert( 'third' ); // выполнится, 1 - true 
