// console.log(isNaN("12abc"))
// console.log(isNaN(123))
// console.log(isNaN(NaN))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN("abc"))
// console.log(Number.isNaN(123))




const userPrototype = {
	sayHello() {
		console.log(`Salom, mening ismim ${this.name}!`)
	},
}

const user1 = Object.create(userPrototype, {
	name: { value: "Ali", writable: false, enumerable: true },
	age: { value: 25, writable: true, enumerable: true },
})
console.log(user1);

console.log(user1.name) // 👉 Ali
console.log(user1.age) // 👉 25
user1.sayHello() // 👉 Salom, mening ismim Ali!
