/* function myName(){
	console.log(`My name:`,this)
}

const car={
	name:'Cobalt',
	year:2022,
	sayName:myName,
	sayNameWindow:myName.bind(window),
	info:function(model){
		console.log(`Car name is ${this.name} and year is ${this.year}`)
		console.log(`Model:${model}`)
	}
}

const gentra={
	name:"Gentra",
	year:2020,
}

const carInfo=car.info.bind(gentra)
carInfo('Gentra') */

