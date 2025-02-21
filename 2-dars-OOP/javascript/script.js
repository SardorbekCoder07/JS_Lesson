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
	static accelarate() {
		this.speed += 10
		console.log(`${this.make} endi ${this.speed} km/h tezlikda harakatlanmoqda`)
	}
}
const bmw = new Car("BMW", 200)
console.log(bmw.accelarate()); */



/* class Laptop{
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
hp.getLaptopProperty */

/* let imkoniyat = 3
class User {
	constructor(userName, password, subPassword) {
		this.userName = userName
		this._password = password
		this.subPassword = subPassword
	}
	// get password() {
	// 	return console.log(`Parol hech kimga berilmaydi!`)
	// }
	get password() {
		const isSuccess = confirm("Parolni bilish uchun ikki bosqichli parolingizni kiritasimi")
		if (isSuccess) {
			let data = prompt("Ikki bosqichli parolingizni kiriting.")
			if (`${data}` === this.subPassword) {
				console.log(`${this.userName} ning paroli : ${this._password}`)
			}
		}
	}
}

const user1 = new User("Sardorbek", "1234", "S")
user1.password */


/* class User {
	constructor(username, password) {
		this.username = username
		this._password = password
	}

	get password() {
		return "Parol maxfiy!"
	}

	set password(newPassword) {
		if (newPassword.length < 6) {
			console.log("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!")
		} else {
			this._password = newPassword
			console.log("Parol muvaffaqiyatli o‘zgartirildi!")
		}
	}
}

const user = new User("ali123", "mySecret")

console.log(user.password)

user.password = "123"
user.password = "yangiParol" // */

/* class MathHelper {
	static square(num) {
		return num * num
	}
}

console.log(MathHelper.square(5))
console.log(MathHelper.square(10));
console.log(MathHelper);
 */


class Validator {
	static isPhoneNumberValid(phone) {
		return /^\+998\d{9}$/.test(phone)
	}
}

console.log(Validator.isPhoneNumberValid("+998901234567"))
console.log(Validator.isPhoneNumberValid("12345")) 