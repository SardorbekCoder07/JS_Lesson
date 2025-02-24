//Object create() inheritance 

/* const Teacher = function (name, age) {
	this.name = name
	this.age = age
}
Teacher.prototype.calcAGe = function () {
	return console.log(`${this.name}ning tug'ilgan yili:${2025 - this.age}`)
}
Teacher.prototype.sayHello = function () {
	return console.log(`Assalamu alaykum hurmatli ${this.name}`)
}
const newTech = new Teacher('Sarvinoz', 20)

const Student = function (name, age, course) {
	Teacher.call(this, name, age)
	this.course = course
}

const Other = function (name, age, course, work) {
	Student.call(this, name, age, course)
	this.work = work
}
Student.prototype = Object.create(Teacher.prototype)
Student.prototype.constructor = Student

Other.prototype = Object.create(Student.prototype)
Other.prototype.constructor = Other


const student1 = new Student("Sardorbek", 21, "Front")
const student2 = new Student("Sarvarbek", 30, "Front")
const other1 = new Other("Kimdur", 35, "Back", "Not working")
console.log(other1)
console.log(student1)


student1.calcAGe()
student2.calcAGe()
student1.sayHello()
other1.calcAGe() */


const Car = function (make, speed) {
	this.make = make
	this.speed = speed
}
Car.prototype.break = function () {
	this.speed -= 10
	console.log(`${this.make} endi ${this.speed} km/h da harakatlanmoqda!`)
}

const EV = function (make, speed, charge) {
	Car.call(this, make, speed)
	this.charge = charge
}
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo
	console.log(`${this.make} quvvatlandi:${this.charge}%`)
}

EV.prototype.accelarate = function () {
	if (this.charge > 0) {
		this.charge--
		this.speed += 20
		console.log(`${this.make} endi ${this.speed} km/h da harakatlanmoqda. Quvvati:${this.charge}%`)
	} else {
		console.log(`Mashinani quvvatlang`)
	}
}
const byd = new EV("Build Your Dreams", 180, 3)
byd.accelarate()
byd.accelarate()
byd.accelarate()
byd.chargeBattery(15)
byd.accelarate()