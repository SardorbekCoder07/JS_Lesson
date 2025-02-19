const user1 = {
	name: "Ali",
	age: 25,
	greet: function () {
		console.log(`Salom, mening ismim ${this.name}!`)
	}
}
const user2 = {
	name: "Bekzod",
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
