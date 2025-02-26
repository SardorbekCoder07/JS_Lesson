'use strict'
/* inheritamce class */
/* bu class ota class */
/* class Payment {
	constructor(amount) {
		this.amount = amount
	}
	proccess() {
		console.log(`${this.amount} pul orqali to'landi`)
	}
}

class CashPayment extends Payment {
	constructor(amount, price) {
		super(amount)
		this.price = price
	}
	proccess() {
		console.log(`${this.amount} pul orqali ${this.price} so'm to'landi`)
	}
}

class CardPayment extends CashPayment {
	constructor(amount, price, cardNumber) {
		super(amount, price)
		this.cardNumber = cardNumber
	}
	proccess() {
		console.log(`${this.amount}${this.amount.toLowerCase()==='naqd'?" pul":""} orqali ${this.price} so'm karta raqamiga yo'naltirildi ${this.cardNumber}`)
	}
}

const pay = new CardPayment("Click", 145000,'8600 4523 5468 9800')
pay.proccess()
 */

class ExtensibleFunction extends Function {
	constructor(f) {
		return Object.setPrototypeOf(f, new.target.prototype)
	}
}
class MeningFunksiyam extends ExtensibleFunction {
	constructor(ism) {
		// super orqali funksiya yaratamiz
		super(function () {
			return `Salom, ${ism}!`
		})
		this.ism = ism
	}

	// Qo'shimcha metod
	tanishuv() {
		console.log(`Men ${this.ism} bilan tanishmoqchiman`)
	}
}
const something=new MeningFunksiyam("Sarvarbek")
something.tanishuv()


// class Smth extends ExtensibleFunction {
// 	constructor(x) {
// 		super(function () { return x }) // closure
// 		// console.log(this); // function() { return x; }
// 		// console.log(this.prototype); // {constructor: …}
// 	}
// }
// class Anth extends ExtensibleFunction {
// 	constructor(x) {
// 		super(() => { return this.x }) // arrow function, no prototype object created
// 		this.x = x
// 	}
// }
// class Evth extends ExtensibleFunction {
// 	constructor(x) {
// 		super(function f() { return f.x }) // named function
// 		this.x = x
// 	}
// }
