//Object create() inheritance 

const person = {
	greet: function () {
		console.log("Hello")
	}
}
const student = Object.create(person,{
	name:'Sardorbek',
	age:20
})

console.log(student);
