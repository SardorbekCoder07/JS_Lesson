'use strict'
/* const Product={
	init(name,price){
		this.name=name
		this.price=price
	},
	getInfo(){
		console.log(`${this.name} narxi ${this.price}$`)
	}
}

const ElectronicProduct=Object.create(Product)
ElectronicProduct.initElectronic=function(name,price,brand){
	this.init(name,price)
	this.brand=brand
}
ElectronicProduct.initElectronic('MacBook Pro',1500,'Apple')
ElectronicProduct.getInfo()


const phone=Object.create(Product)
phone.init('Iphone 15',1000,'Apple')
phone.getInfo() */
/* another class */
/* class Account {
	constructor(owner, currency, pin) {
		this.owner = owner
		this.currency = currency
		this.pin = pin
		this.movements = []
		this.locale = navigator.language
		console.log(`Thanks for opening an acccount ${this.owner}`)
	}

	deposit(val){
		this.movements.push(val)
	}
	withdraw(val){
		this.movements.push(-val)
	}
	approveLoan(val){
		return true
	}
	requestLoan(val){
		if(this.approveLoan(val)){
			this.deposit(val)
			console.log(`Loan approved`)
		}
	}
}
const acc1 = new Account("Sardorbek", "USD", 1111)
console.log(acc1); */

/* inheretance object create */
/* const PersoProto = {
	init(name, age) {
		this.name = name
		this.age = age
	},
	calcAge() {
		console.log(2025 - this.age)
	}
}
// const student=Object.create(PersoProto)

const StudentProto = {
	init(name, age, course) {
		PersoProto.init.call(this, name, age)
		this.course = course
	},

	getInfo() {
		console.log(`${this.name} student learning ${this.course}`)

	},
	calcYear() {
		PersoProto.calcAge.call(this)
	}
}
const student1 = Object.create(StudentProto)
student1.init('Sardorbek',22,'Math')
student1.calcYear() */
/* 
const Product = {
	initt(name, price) {
		this.name = name
		this.price = price
	},
	getInfo() {
		return `${this.name} narxi ${this.price}$`
	}
}

const ElectronicProduct = Object.create(Product)


ElectronicProduct.initElectronic = function (name, price, brand) {
	this.initt(name, price)
	this.brand = brand
}

ElectronicProduct.getWarranty = function () {
	return `${this.name} brendi: ${this.brand}, 1 yil kafolat bilan`
}


const phone = Object.create(ElectronicProduct)
phone.initElectronic('iPhone 15', 12000000, 'Apple')

console.log(phone.getInfo())
console.log(phone.getWarranty());
 */
const input = document.getElementById('input')
const depositBtn = document.getElementById('deposit')
const withdrawbtn = document.getElementById('withdraw')

class Account {
	constructor(owner, currrency, pin, balance) {
		this.owner = owner
		this.currrency = currrency
		this.pin = pin
		this.balance = balance
		this.movements = []
	}

	deposit(amount) {
		this.balance += amount
		this.movements.push(amount)
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log('You have not enough money')
		} else {
			this.balance -= amount
			this.movements.push(-amount)
		}
	}
}


const account1 = new Account('Sardorbek', 'USD', 1111, 1000)

let info


depositBtn.addEventListener('click', function () {
	account1.deposit(Number(input.value))
	info = account1.movements.filter((item) => {
		return item > 0
	})
	console.log(info)

})


withdrawbtn.addEventListener('click', function () {
	account1.withdraw(Number(input.value))
	info = account1.movements.filter((item) => {
		return item < 0
	})
	console.log(info)
})
