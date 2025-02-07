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

const fruits = ["apple", "banana", "orange", "grape"]
const [first, second, ...restFruits] = fruits
console.log(first, second, restFruits)