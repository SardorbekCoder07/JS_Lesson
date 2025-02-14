// console.log(isNaN("12abc"))
// console.log(isNaN(123))
// console.log(isNaN(NaN))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN("abc"))
// console.log(Number.isNaN(123))

class Person {
	constructor(name, age) {
		this.name = name
		this._age = age
	}

	// Getter

	get getAge() {
		return `${this.name}ning yoshi :${this._age}`
	}

	//setter yoshni o'zgartiradi

	set getAge(newAge) {
		if(newAge<0){
			console.log("Yosh manfiy bo'lishi mumkin emas")
		}else{
			this._age=newAge
		}
	}
}

const person=new Person("Sardorbek",22)
console.log(person.getAge);
person.getAge=30
console.log(person.getAge);
person.getAge=-5
console.log(person.getAge);


