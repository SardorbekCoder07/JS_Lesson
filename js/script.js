// const person = { name: "Sardor", age: 25, city: "Tashkent" }
// console.log(Object.entries(person));

// const original = { name: "Sardor", age: 25 };
// const clone = Object.assign({city:"Tashkent"},original);
// console.log(clone);


// const obj1 = { a: 1, b: 5};
// const obj2 = { b:2, c: 4 };
// const merged = Object.assign({}, obj1, obj2);
// console.log(merged);
// obj1.d=5;
// console.log(obj1);



// const person = { name: "Sardor", age: 25 };
// person.age = 30; 
// Object.freeze(person);
// person.age=45;
// console.log(person.age);

// const person = { name: "Sardor", age: 25 };
// Object.seal(person);
// person.age = 30; 
// person.city = "Tashkent"; 
// console.log(person); 

// const entries = [["name", "Sardor"], ["age", 25], ["city", "Tashkent"]];
// const obj = Object.fromEntries(entries);
// console.log(obj);

// const person = { name: "Sardor", age: 25 };
// console.log(person.hasOwnProperty("name")); 
// console.log(person.hasOwnProperty("city")); 

	// console.log(Object.is(25, 25)); 
	// console.log(Object.is(NaN, NaN));
	// console.log(Object.is(0, -0)); 