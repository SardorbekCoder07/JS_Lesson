// console.log(isNaN("12abc"))
// console.log(isNaN(123))
// console.log(isNaN(NaN))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN("abc"))
// console.log(Number.isNaN(123))

function Car(make, speed) {
	this.make = make
	this.speed = speed
}
Car.prototype.accelarte = function () {
	this.speed += 10
	console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
}

Car.prototype.break = function () {
	this.speed -= 5
	console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
}

const bmw = new Car("BMW", 120)
const mers = new Car("Mers", 90)
)