// const person = { name: "Sardor", age: 26, city: "Tashkent" }
// person.age = 30
// console.log(person);

// const person = { name: "Sardor", age: 25 }
// Object.freeze(person)
// person.age = 30
// delete person.name
// console.log(person)

// const person = { name: "Sardor", age: 25 }
// // Object.seal(person)
// // person.age = 30
// // person.city = "Tashkent"
// // console.log(person) 

// const entries = Object.entries(person)

// console.log(Object.fromEntries(entries))


// console.log(person.hasOwnProperty("age"));


// console.log(Object.is(25, 25))
// console.log(Object.is(NaN, NaN))
// console.log(Object.is(0, -0)) 

// function myWord() {
// 	console.log("My word", this)
// }


// const car = {
// 	name: 'BMW',
// 	year: 2020,
// 	sayName: myWord,
// 	sayNameWindow: myWord.bind(window),
// 	info: function (model) {
// 		console.log(`Car name is ${this.name} and year is ${this.year}`)
// 		console.log(`Car model is ${model}`)
// 	}
// }

// const gentra = {
// 	name: 'Gentra',
// 	year: 2021,
// }
// // car.info.bind(gentra,"Chevrolet")()
// car.info.call(gentra, "Chevrolet")

const a=10;
function getName(){
	const a=20;
	console.log(a);
}
getName()