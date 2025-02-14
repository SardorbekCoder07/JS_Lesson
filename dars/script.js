// console.log(isNaN("12abc"))
// console.log(isNaN(123))
// console.log(isNaN(NaN))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN("abc"))
// console.log(Number.isNaN(123))


const Car = function (model, year) {
	this.model = model
	this.year = year
}

const bmw = new Car("BMW", 1900)
const audi = new Car("Audi", 2021)

Car.prototype.calcCarAge = function () {
	return 2025 - this.year
}
console.log(bmw.calcCarAge())
