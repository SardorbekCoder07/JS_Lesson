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
const car1 = new Car('BMW', 280)
Car.prototype.accelarate = function () {
	this.speed += 10
	console.log(`${this.make} hozir ${this.speed} km/h da harakatlanmoqda`)
}

Car.prototype.break = function () {
	this.speed -= 5
	console.log(`${this.make} hozirda ${this.speed} km/h da harakatlanmoqda`)
}

//voris sifatida constructor function yaratamiz

function ElectricCar(make, speed, battery) {
	Car.call(this, make, speed)
	this.battery = battery
}

ElectricCar.prototype.chargeBattery = function (chargeTo) {
	this.battery = chargeTo
	console.log(`${this.make} batareykasi ${this.battery}% gacha quvvatlandi `)
}
const elec = new ElectricCar('BYD', 120, 80)
ElectricCar.chargeBattery(100)