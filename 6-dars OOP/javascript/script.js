'use strict'

class Account {
	#balance//private fields
	constructor(owner, currency, pin) {
		this.owner = owner
		this.currency = currency
		this.pin = pin
		this.#balance = 1000
	}

	deposit(amount) {
		this.#balance += amount
		console.log(`${amount} ${this.currency} qo‘shildi.`)
	}

	withdraw(amount) {
		if (amount > this.#balance) {
			console.log('You have not enough money')
		} else {
			this.#balance -= amount
			console.log(`${amount} ${this.currency} chiqildi.`)
		}
	}

	getBalance() {
		console.log(this.#balance)
	}
}

const acc1 = new Account('Sardorbek', 'USD', 1111)
acc1.deposit(3000)
acc1.getBalance()