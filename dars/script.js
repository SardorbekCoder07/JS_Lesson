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

//bind, call and aplly

/* function myName() {
	console.log(`Car`, this)
}
//myName()

const car = {
	name: 'Cobalt',
	year: 2022,
	sayName: myName,
	sayNamewWindow: myName.bind(window),
	info: function (model,color) {
		console.log(`Car name is:${this.name}`)
		console.log(`Car year:${this.year}`)
		console.log(`Model:${model}`)
		console.log(`Color:${color}`)
	}
}

const onix = {
	name: "Onix",
	year: 2024
}

car.info.bind(onix)('Chevrolet','red') */
//car.info.call(onix, 'Chevrolet',"red")
//car.info.apply(onix,['Chevrolet',"Red"])



let arr=[1,2,3,4,5]

function plusTo(arr,n){
	return arr.map(el=>{
		return el+2
	})
}

console.log(plusTo(arr,2))