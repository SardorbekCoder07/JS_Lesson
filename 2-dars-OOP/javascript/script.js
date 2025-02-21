'use strict'
const Person = function (surname, name, age) {
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

console.log(jasmina.__proto__===Person)
console.log(jasmina)
