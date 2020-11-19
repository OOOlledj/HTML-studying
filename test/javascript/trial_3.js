/* 2 > 1 = true
2 == 1 = false
2 != 1 = true */
let result = 5 > 4; //true
/*
alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true
alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом
alert( true == 1 ); // true
alert( false == 0 ); // true
 alert( 0 === false ); // false, так как сравниваются разные типы
 */
 // '===' is operator of strict type comparison
 /* null === undefined = false
 null == undefined = true*/
 let year = prompt('year when firs human visited space?')
 if (year==1961) {alert('yes');}
 else alert('no');
 let age = prompt('what is your age?',18);
 let accessAllowed = age>18 ? true : false;
 
age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
alert( message );
result = true || false; result = true && false;result != true; 
let hour = 12;
let isWeekend = true;
if (hour<10 || hour>18 || isWeekend){alert('office is closed');}
if (hour == 12 && minute == 30) {alert( 'The time is 12:30' );}
result = !value;
//double '!!' -> boolean
alert( !!"non-empty string" ); // true
alert( !!null ); // false
//a ?? b -> a, if a is not null or not undefined
//a ?? b -> b, if a is null or undefined
let firstName = null;let lastName = null;let nickName = "Суперкодер";
// показывает первое определённое значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

 