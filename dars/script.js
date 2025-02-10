/* const arr = ['fruit', 'vegetables', 'meat', 'vegetarion', 'fish']
const [a, b, , d, e] = arr
console.log(a, b, d, e);
 */

//Destructuring  objects
/* const person = {
	name: 'John',
	age: 30,
	city: 'New York',
	address: '123 Main St',
	phone: '555-555-5555'
} */

// const {name:a,age:sardor,city:c,address:d,phone:f}=person
/* const a=person.name
const b=person.age
const c=person.city
const d=person.address
const f=person.phone */
// console.log(a,sardor,c,d,f);


/* const obj = { key1: "value1", key2: "value2" }

const { key1: newName,key3=0 } = obj
console.log(key3)  */

/* const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
/* const bir = arr1.concat(arr2)
console.log(bi); */

// console.log(...arr1,...); */


/* const abs=(a,b,c)=>{
	return a+b+c
}
const arr=[1,2,3]
console.log(abs(...arr));

 */

/* const obj1 = {
	name: 'sardor',
	age: 20
}
const obj2 = {
	name1: 'sardor',
	age1: 20
}
const obj3 = {
	name2: 'sardor',
	age2: 20
}

const obj4={
	...obj1,
	...obj2,
	...obj3
}
console.log(obj4); */

/*
const arr = [1, 2, 3]
const arrCopy = [...arr,4]
console.log(arrCopy)

const obj = { a: 1, b: 2 }
const objCopy = { ...obj }
console.log(objCopy)  */

/* const fruits = ["apple", "banana"]
const vegetables = ["carrot", "potato"]
const combined = [...fruits, "mango", ...vegetables]
console.log(combined)  */

/* const user = { name: "Sardorbek", age: 25 }
const updatedUser = { ...user, age: 26, city: "Tashkent" }
console.log(updatedUser)  */

/* const numbers = [1, 2, 3]
const clonedNumbers = [...numbers]
clonedNumbers.push(4)
console.log(numbers)
console.log(clonedNumbers)  */

/* const fruits = ["apple", "banana", "orange", "grape"]
const [first, second, ...restFruits] = fruits
console.log(first, second, restFruits) */

/* const user = { name: "Sardorbek", age: 25, country: "Uzbekistan" }
const { name, ...restDetails } = user
console.log(name, restDetails);
 */

/* function sum(...theArgs) {
	let total = 0
	for (const arg of theArgs) {
		total += arg
	}
	return total
}

console.log(sum(1, 2, 3))

console.log(sum(1, 2, 3, 4)) */


/* function multiply(multiplier, ...theArgs) {
	return theArgs.map((element) => multiplier * element)
}

const arr = multiply(2, 15, 25, 42)
console.log(arr) */

/* function sortRestArgs(...theArgs) {
	const sortedArgs = theArgs.sort()
	return sortedArgs
}

console.log(sortRestArgs(5, 3, 7, 1))

function sortArguments(...arguments) {
	const sortedArgs = arguments.sort()
	return sortedArgs
}

console.log(sortArguments(5, 3, 7, 1)) */


/* const firstName = Number(prompt("Ismingizni kiriting"))
const fakeName = "Guest"
document.write(`Salom ${firstName ?? fakeName}`) */

/* const age = 0;
const defaultAge = 18;

const userAge = age ?? defaultAge;
console.log(userAge); */

/* const withOr = 0 || "Default"
console.log(withOr)

const withNullish = 0 ?? "Default"
console.log(withNullish) */


/* const firstName = prompt("Ismingizni kiriting")
const lastName = prompt("Familiyangizni kiriting")
const city = prompt("Shahringizni kiriting")

const aboutPerson = {
	firstName,
	lastName,
	city
}

const aboutTheName = aboutPerson.firstName ?? "Unknown firstname"
const aboutTheLast = aboutPerson.lastName ?? "Unknown lastname"
const aboutTheCity = aboutPerson.city ?? "Unknown city"
 */

/* function getApiData() {
	return {
		title: undefined,
		description: null,
	}
}

const data = getApiData()
const title = data.title ?? "No Title"
const description = data.description ?? "No Description"
console.log(data.name);

console.log(title)
console.log(description) */
/* const user = {
	sayHello: () => "Salom, Sardorbek!",
}

console.log(user?.sayHello?.())

const user2 = {}
console.log(user2?.sayHello?.()); */

/* const key = "email"
const user = {
	name: "Sardorbek",
	contact: {
		email1: "sardorbek@example.com",
	},
}

console.log(user?.contact?.[key]); */


/* const user = {
	profile: null,
}
log
console.log(user?.profile?.name);

const name = user?.profile?.name ?? "Mehmon"

console.log(name); */


/* const user = {
	id: 1,
	name: "Sardorbek",
	settings: {
		theme: "dark",
		notifications: null,
	},
}
console.log(user?.settings?.theme)
console.log(use?.settings?.notifications?.email)
// /* /* console.log(user?.profile?.age ?? "Ma'lumot yo'q") */
// const set1 = new Set([1, 2, 3, 4])
// const set2 = new Set([3, 4, 5, 6])
// const a = set2.difference(set1)
// console.log(a)

// // // Birlashtirish (union)
// // const union = new Set([...set1, ...set2])
// // console.log(union)

// // // Kesishma (intersection)
// // const intersection = new Set([...set1].filter(x => set2.has(x)))
// // console.log(intersection)

// // // Farq (difference)
// const difference = new Set([...set1].filter(x => !set2.has(x)))
// console.log(difference)

/* const myMap = new Map()

myMap.set('name', 'Sardorbek')
myMap.set('age', 25)
myMap.set(true, 'Bu boolean kalit')
myMap.set({ id: 1 }, 'Bu obyekt kalit')


for (const i of myMap.entries()) {
	console.log(`Ikkalasi ham :${i}`)
}

 */
// const obj = {
// 	name: 'Sardorbek',
// 	age: 25,
// }

// console.log(obj) 

let count = 0
let intervalID = setInterval(() => {
	count++
	console.log(`${count} sekund o‘tdi!`)
	if (count === 5) {
		clearInterval(intervalID) // 5 martadan keyin to‘xtatamiz
		console.log("Tugatildi!")
	}
}, 1000)
