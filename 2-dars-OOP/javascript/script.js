'use strict'
/* const Person = function (surname, name, age) {
	this.name = name
	this.surname = surname
	this.age = age

	this.calcAge = function () {
		return `Yil:${2025 - this.age}`
	}
}
const People = function (surname, name, age) {
	this.name = name
	this.surname = surname
	this.age = age

	this.calcAge = function () {
		return `Yil:${2025 - this.age}`
	}
}

const sardor = new Person('Sayfullayev', "Sardorbek", 20)
const sardo1r = new Person('Sayfullayev', "Sardorbek", 20)
const jasmina = new People('Jurayeva', "Jasmina", 19)

 */


/* function Car(make, speed) {
	this.make = make
	this.speed = speed
}

Car.prototype.accelerate = function () {
	this.speed += 10
	console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
}
const bmw=new Car("BMW",200)
console.log(bmw)
 */

//class usuli

/* class Car {
	constructor(make, speed) {
		this.make = make
		this.speed = speed
	}
	accelarate() {
		this.speed += 10
		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
	}
}
const bmw = new Car("BMW", 200)
console.log(bmw);
 */


class Laptop{
	constructor(price,model,year){
		this.model=model
		this.price=price
		this._year=year
	}
	get getLaptopProperty(){
		return console.log(`Year:${this._year}`)
	}

	set getLaptopProperty(year){
		this._year=year
		return console.log(`Year changed ${this._year}`)
	}
}

const hp=new Laptop(1200,"HP",2020)
hp.getLaptopProperty
hp.getLaptopProperty=3000
hp.getLaptopProperty
