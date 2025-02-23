//Inheritance Between "Classes":Constructor functions 
/* const Person = function (firtstName, birthYear) {
	this.firtstName = firtstName
	this.birthYear = birthYear
}//father constructor
Person.prototype.calcAge = function () {
	console.log(`I was born in ${2025 - this.birthYear}`)
}

const Student=function(firtstName,birthYear, course){
	Person.call(this,firtstName,birthYear)
	this.course=course
}

Student.prototype.introduce=function(){
	console.log(`My name is ${this.firtstName} and I study ${this.course}`)
}
const mike=new Student("Mike",2000,"Computer Science")
console.log(mike);
mike.introduce() */


/* Object.create() */
const person={
	greet:function(){
		console.log("Hello")
	}
}
const student={}
student.__proto__=person
student.greet()