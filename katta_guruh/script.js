/* let array=[1,2,3,4,5]
let [x,y,...arr]=array
console.log(x,y,arr)
 */

// const user = { firstName: "Sardorbek", age: 25, country: "Uzbekistan" }
// const { firstName, ...restDetails } = user
// console.log(user)
// console.log(firstName)
// console.log(restDetails) 

// function dec(...pattern){
// 	return pattern
// }
// console.log(dec(1,2,3,4,5))

// const fruits = ["apple", "banana", "orange", "grape"]
// const users = { firstName: "Sardorbek", age: 25, country: "Uzbekistan" }
// for (let user in users) {
// 	console.log(users[user])
// }

// function sum(...theArgs) {
// 	let total = 0
// 	for (const arg of theArgs) {
// 		total += arg
// 	}
// 	return total
// }
// const theArgs=[1,2,3,4,5]
// console.log(sum(...theArgs));


// console.log(sum(1, 2, 3))

// console.log(sum(1, 2, 3, 4))

// function multiply(multiplier, ...theArgs) {
// 	return theArgs.map((element) => multiplier * element)
// }

// const arr = multiply(3, 15, 25, 42)
// console.log(arr)

// let userName=0
// let secondName=null

// let nullishOperator=userName ?? 'Isim mavjud emas '
// let nullishOperator2=secondName??'Familya mavjud emas '

// console.log(nullishOperator,nullishOperator2)


// const age = 0
// const defaultAge = 18

// const userAge = age ?? defaultAge
// console.log(userAge)

// const withOr = 0 || "Default"
// console.log(withOr)

// const withNullish = 0 ?? "Default"
// console.log(withNullish)

// const user = {
// 	name: null,
// 	age: 25,
// 	city: undefined,
// }

// const userName = user.name ?? "Unknown"
// const userCity = user.city ?? "No city provided"

// console.log(userName)
// console.log(userCity);

// function getApiData() {
// 	return {
// 		title: null,
// 		description: 'Zur',
// 	}
// }

// const data = getApiData()
// const title = data.title ?? "No Title"
// const description = data.description ?? "No Description"

// console.log(title)
// console.log(description)

// const user = {
// 	profile: {
// 		name: undefined,
// 	},
// }

// // Xatolikni oldini olish uchun
// if (user && user.profile && user.profile.name) {
// 	console.log(user.profile.name)
// } else {
// 	console.log("Ism topilmadi")
// }

// const user = {
// 	// profile: {
// 	// 	name1,
// 	// },
// }

// console.log(user.profile.name1) 

// console.log("Hello");

// const users = [
// 	{ name: "Sardorbek", age: 25 },
// 	null,
// 	{ name: "Jamshid", age: 30 },
// ]

// console.log(users?.[0]?.name)

// console.log(users?.[1]?.name);

// const user = {
// 	sayHello: () => "Salom, Sardorbek!",
// }

// console.log(user?.sayHello?.())

// const user2 = {}
// console.log(user2.sayHello)

// const key = "email"
// const user = {
// 	name: "Sardorbek",
// 	contact: {
// 		email: "sardorbek@example.com",
// 	},
// }
// console.log(user?.contact?.[key])

// const user = {
//   profile: null,
// };

// const name = user?.profile?.name ?? "Mehmon";

// console.log(name); 

// const mySet = new Set()
// console.log(typeof mySet) 

// const numbers = new Set()

// numbers.add(1)
// numbers.add(2)
// numbers.add(2)
// numbers.add(3)

// numbers.clear()
// console.log(numbers) 

// const fruits = new Set(["olma", "banan", "nok"])

// for(let fruit of fruits){
// 	console.log(fruit);

// }

// console.log(fruits.size)
// console.log(fruits.has("gilos")) 

// const numbersArray = [1, 2, 3, 3, 4, 4, 5]
// const uniqueNumbers = new Set(numbersArray)
// const uniqueArray = [...uniqueNumbers]
// console.log(uniqueArray) 


// const set1 = new Set([1, 2, 3, 4])
// const set2 = new Set([3, 4, 5, 6])

// // Birlashtirish (union)
// const union = new Set([...set1, ...set2])
// console.log(union)//1,2,3,4,5,6

// // Kesishma (intersection)
// const intersection = new Set([...set1].filter(x => set2.has(x)))
// console.log(intersection)

// // Farq (difference)
// const difference = new Set([...set2].filter(x => !set1.has(x)))
// console.log(difference) 

// const evens = new Set([2, 4, 6, 8])
// const squares = new Set([1, 4, 9])
// console.log(evens.symmetricDifference(squares)) 

// const obj1 = { id: 1, name: "Sardorbek" }
// const obj2 = { id: 2, name: "Jamshid" }

// const mySet = new Set()
// mySet.add(obj1)
// mySet.add(obj2)
// mySet.add(obj1)

// console.log(mySet);
