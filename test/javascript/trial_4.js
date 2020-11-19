let i=0;
while(i<3){console.log(i);i++;}
while(i) console.log(i--);
do{
	alert(i);
	i++;
} while (i<3);
for(i=0;i<3;i++){console.log(i*10);}
let s = 0;
while (true){
	let val = +prompt('number:');
	if (s > 25) break; //drop loop when sum is more than 25
	if (val%7 == 0) continue;//skip s+= if value is divided by 7
	s+= val;
}
console.log(s);

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, '');
    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)
    // сделать что-нибудь со значениями...
  }
}
alert('Готово!');
let a = 2+2;
switch(a){
	case 2:
	case 3:
		console.log('low');
		break;
	case 4:
		console.log('right');
		break;
	case 5:
		console.log('too much');
		break;
	default:
		console.log('not available value');
}
