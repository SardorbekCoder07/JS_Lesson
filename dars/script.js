function myName(){
	console.log(`My name:`,this)
}

const car={
	name:'Cobalt',
	year:2022,
	sayName:myName
}