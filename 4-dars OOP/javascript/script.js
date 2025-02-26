'use strict'
/* inheritamce class */
/* bu class ota class */
class Payment {
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

