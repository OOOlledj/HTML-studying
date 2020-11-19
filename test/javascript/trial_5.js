function showMessage(from,text="*молчит*"){
	alert('HI, everyone!');
	alert(from +':'+text);
}
showMessage('Oleg','Hello!');
showMessage('Alex','Hello!');

let sayHi = function(){
	alert("Greetings");
};
console.log(sayHi);//output function code
let func = sayHi; //func is the same as sayHi now

function ask(question,yes,no){
	if (confirm(question)) yes();
		else no();
}
function showOk(){
	alert("You're agree");}
function showCancel(){
	alert("Discarded");}
ask("Do you agree?", showOk,showCancel);

ask("Do you agree?",
	function() {alert("You're agree");},
	function() {alert("Discarded");}
);//the same as str 17-20, but shorter

let sum = (a,b) => a+b;
alert(sum(1,2));

let doubling = n => n*2;
alert(doubling(4));

let multi = (a,b) =>{
	let res = a * b;
return res;
};
alert(multi(3,4));