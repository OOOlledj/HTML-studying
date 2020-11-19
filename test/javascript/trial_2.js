"use strict"
alert("hello");

prompt("w8 for input","input");//(title,[default]) default is't nescessary
let age = prompt("what is your age?");
alert(`your age is ${age} years`);

let isBoss = confirm("are you the boss?");
alert(isBoss);//true if press OK

let value = true;
alert(typeof value);//boolean
value = String(value);
alert(typeof value);//string

let str = '123';
typeof str;//string
let num = Number(str);
typeof num;//number
alert( Number("   123   ") ); // 123 "cut spaces"
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
//undefined -> Nan; null -> 0
alert( Boolean(1) ); // true
alert( Boolean("Привет!") ); // true
//Boolean() -> false for: 0, null, undefined, NaN; else - true
alert( Boolean(0) ); // false
alert( Boolean("") ); // false
let x=1; x=-x;//1 -> -1
x = 1; let y = 3; y = y-x //y -> 2
/* 5%2 = 1, 8%3 = 2
2**2=4, 4**2=16
'hello' + ',' + 'world' = 'hello,world'
'1' + 2 = '12'
2 + '1' = '21'
2 + 2 + '1' = '41'
work only for + operations; for else it's different:
6 - '2' = 4 ('2' -> 2)
'6'/'2' = 3 ('6' -> 6, '2' -> 2)
Unar operator '+' is the same as Number():
x=1;+x (1)
y=-2;+y (-2)
+true (1); +"" (0);
"2" + "3" = "23"; +"2" + +"3" = 5
*/

