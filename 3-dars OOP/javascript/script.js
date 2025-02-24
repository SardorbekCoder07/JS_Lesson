//Object create() inheritance 

const person = {
	greet: function () {
		console.log(`Salom, mening ismim ${this.name}`)
	},
}

const student = Object.create(person, {
	name: { value: "Sardorbek", writable: true },
	course: { value: "Front-end", writable: true },
})

student.greet()
console.log(student)
