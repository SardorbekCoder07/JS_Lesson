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
/* const User = function (name, age) {
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
const ali = new User("Ali", 25) */

/* function Car(brend="NO brend",model="NO model",year="NO year",color="NO color"){
	this.brend=brend
	this.model=model
	this.year=year
	this.color=color
	this.info=function(){
		console.log(`Brend:${this.brend}\nModel: ${this.model}\nYear: ${this.year}\nColor: ${this.color}`)
	}
}

const bmw=new Car()
const merc=new Car("Mercedes","C300",2020,"white")
bmw.info()
console.log(bmw);

merc.info()
 */

/* function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.calcAge=function(){
	console.log(`I was born in ${2025 - this.age} years`)
}
const person1 = new Person("Ali", 25)
console.log(Person.prototype,person1);

person1.calcAge() */

/* function Person(name, age) {
	this.name = name
	this.age = age
}
function Child(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.greet = function () {
	console.log(`Salom, mening ismim ${this.name}!`)
}

const person1 = new Person("Ali", 25)
const person2 = new Child("Vali", 30)
console.log(person1.__proto__===Person.prototype)
console.log(person2.__proto__===Child.prototype) */

const Car = function (make, speed) {
	this.make = make
	this.speed = speed

	this.accelerate = function () {
		this.speed += 10
		console.log(`${this.make} mashina endi ${this.speed}km/h harakatlanmoqda!`)
	}

	this.break = function () {
		this.speed -= 5
		console.log(`${this.make} mashina endi ${this.speed}km/h harakatlanmoqda!`)
	}
}

const nexia2=new Car("Nexia 2",50)
const nexia3=new Car("Nexia 3",60)
nexia2.accelerate()
nexia2.break()