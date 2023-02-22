"use strict"

"" + 1 + 0 // "10", пустая строка складывается с 1, получается строка "1", и к ней добавляется 0
"" - 1 + 0 // -1, вычитание преобр. строку в число.
true + false // 1, 1+0=1
6 / "3" // 2б деление преобразорвывает строку в число
"2" * "3" // 6, умножение преобразорвывает строку в число
4 + 5 + "px" // "9px", сначала делаем сложение чисел, потом сложение строк
"$" + 4 + 5 // $45, складываем как строки
"4" - 2 // 2, преобр. к числу 
"4px" - 2 // NaN, преобр. к числу "4px" не является числом
"  -9  " + 5 // " -9 5", т.к. в строке есть символы помимо числа, то его невозможно преобр. в число. Поэтому сложение строк
"  -9  " - 5 // -14, вычитание всегда преобр. к числу
null + 1 // 1, 0+1
undefined + 1 // Nan, т.к. одно из чисел не задано, операцию невозможно выполнить
" \t \n" - 2 // -2, спец. символы игнорируются и считаются 0