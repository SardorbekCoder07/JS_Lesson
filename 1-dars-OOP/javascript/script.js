/* const user1 = {
	name: "Ali",
	age: 25,
	greet: function () {
		console.log(`Salom, mening ismim ${this.name}!`)
	}
}
const user2 = {
	name: "Bekzod"
	age: 20,
	greet: function () {
		console.log(`Salom, mening ismim ${this.name}!`)
	}
}
const user3 = {
	name: "Sardorbek",
	age: 20,
	greet: function () {
		console.log(`Salom, mening ismim ${this.name}!`)
	}
}

user1.greet()
user2.greet()
user3.greet()
 */

//constructor function 
const User = function (name, age) {
	this.name = name
	this.age = age
	this.toast = function () {
		alert(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`)
	}
	this.calcAge = function () {
		console.log(`I was born in ${2025 - this.age} years`)
	}
}

const sardor = new User("Sardorbek", 20)
const bekzod = new User("Bekzod", 20)
const ali = new User("Ali", 25)


