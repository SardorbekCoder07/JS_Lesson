// console.log(isNaN("12abc"))
// console.log(isNaN(123))
// console.log(isNaN(NaN))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN("abc"))
// console.log(Number.isNaN(123))




const carPrototype = {
	start() {
		console.log(`${this.brand} yurishni boshladi!`)
	},
}

const myCar = Object.create(carPrototype)
console.log(myCar);

myCar.brand = "Tesla" 

myCar.start() 
