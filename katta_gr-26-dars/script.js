// const obj = { key1: "value1", key2: "value2" }
// // const key1=obj.key1
// // const key2=obj.key2

// const { key1, key2 } = obj

// console.log(key1)
// console.log(key2) 


// const obj = { key1: "value1", key2: "value2" }
// const { key1: value1, key2: value2 } = obj
// console.log(value1, value2);

// const obj = { key1: "value1", key2: "value2",key3:"value3" }
// const {key1,key3:value2}=obj
// console.log(key1,value2);


// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// // ES6'dan oldin:
// const combined = arr1.concat(arr2)
// console.log(combined)


// const arr1 = [1, 2, 3]
// console.log(...arr1);

// const arr2 = [4, 5, 6]
// const combined = [...arr1, ...arr2]
// console.log(combined)


// function sum(a, b, c) {
// 	return a + b + c
// }
// const numbers = [1, 2, 3]
// const result = sum.apply(null, numbers)
// console.log(result);

// function sum(a, b, c) {
// 	return a + b + c
// }
// const numbers = [1, 2, 3]
// const result = sum(...numbers)
// console.log(result)


// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }
// // ES6'dan oldin:
// const combined = Object.assign([], obj1, obj2)
// console.log(combined);

// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }
// const combined = { ...obj1, ...obj2 }
// console.log(combined)

// const arr = [1, 2, 3]
// const arrCopy = [...arr]
// console.log(arrCopy)

// const obj = { a: 1, b: 2 }
// const objCopy = { ...obj }
// console.log(objCopy) 

// const fruits = ["apple", "banana"]
// const vegetables = ["carrot", "potato"]
// const combined = [...fruits, "mango", ...vegetables]
// console.log(combined) 

// const user = { name: "Sardorbek", age: 25 }
// const updatedUser = { ...user, age: 26, city: "Tashkent" }
// console.log(updatedUser) 

// const settings = {
// 	theme: "dark",
// 	layout: { sidebar: true }
// }
// const newSettings = { ...settings, layout: { ...settings.layout, sidebar: false } }
// console.log(newSettings) 

// const numbers = [1, 2, 3]
// const clonedNumbers = ({...numbers})
// // clonedNumbers.push(4)
// // console.log(numbers)
// console.log(clonedNumbers) 

// Massivlarda Rest Pattern
// const fruits = ["apple", "banana", "orange", "grape"]
// const [first, second, ...restFruits] = fruits

// console.log(first)
// console.log(second)
// console.log(restFruits)

// Obyektlarda Rest Pattern
// const user = { name: "Sardorbek", age: 25, country: "Uzbekistan" }
// const { name, ...restDetails } = user

// console.log(name)
// console.log(restDetails) 

// function func() {
// 	return arguments
// }
// let number=[1,2,3]
// console.log(func(...number));
