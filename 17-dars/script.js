/* const person=["Sardorbek","Sayfullayev",21,"Erkak","Alibek","Raxmanov",13,"Erkak"] */


/* Object bu qiymat (data) ni key  va value sifatida saqlash uchun ishlatilinadi  */
/* const obj_key = "Name"
const person = {
	firstName: "Sardorbek",
	secondName: "Sayfullayev",
	age: 21,
	gender: "Erkak",
}
 */

// const person=new Object();
/* person.firstName="Sardorbek"
person.secondName="Sayfullayev"
person.age=21
person.gender="Erkak" */

/* const person = {
	firstName: "Sardorbek",
	secondName: "Sayfullayev",
	age: 21,
	gender: "Erkak",
}
person.firstName = "Alibek"
console.log(person)
delete person.age
delete person.secondName
delete person.firstName
delete person.gender
 */
/* let firstName = "Sardorbek"
let secondName = "Sayfullayev"
let age = 21
let gender = "Erkak"

const universal_obj = {
	firstName: firstName,
	secondName: secondName,
	age: age,
	gender: gender,
	calculateAge:(year)=>{
		return 2025-year
	},
	phoneNumbers:["+998942939449","+998942939448","+998942939549",["+SAsdA","+998942939448","+998942939549"]],
	nested_obj:{
		skils:["html","css","js"],
	}
}
console.log(universal_obj.nested_obj.skils[0]); */
/* 
const laliga = [
	{
		clubName: "Barselona",
		point: 48,
		matches: 20,
		scoreGoals: 25,
	},
	{
		clubName: "Real Madrid",
		point: 48,
		matches: 20,
		scoreGoals: 27,
	},
	{
		clubName: "Atletiko Madrid",
		point: 44,
		matches: 20,
		scoreGoals: 21,
	},
	{
		clubName: "Atletik Bilbao",
		point: 39,
		matches: 20,
		scoreGoals: 13,
	},
	{
		clubName: "Villareal",
		point: 30,
		matches: 20,
		scoreGoals: 13,
	},
	{
		clubName: "Muhammad",
		point: 50,
		matches: 20,
		scoreBals: [15,20,23,25],
		average:
	}
]
// console.log(laliga)
const sorted = laliga.sort((a, b) => {
	if (a.point === b.point) {
		return b.scoreGoals - a.scoreGoals
	} else {
		return b.point - a.point
	}
}) */

const students = [
	{ name: "Ali", scores: [85, 90, 78] },
	{ name: "Vali", scores: [92, 88, 95] },
	{ name: "Zarina", scores: [75, 80, 70] },
	{ name: "Dilnoza", scores: [88, 85, 91] }
]

// 1. Har bir talabaga o‘rtacha baho hisoblash
students.forEach((student) => {
	const totalScore = student.scores.reduce((total, score) => total + score, 0)
	student.averageScore = totalScore / student.scores.length // O‘rtacha baho
	console.log(`${student.name}: O‘rtacha baho = ${student.averageScore.toFixed(2)}`)
})

// 2. Eng yuqori o‘rtacha bahoga ega talabani topish
const topStudent = students.reduce((highest, student) =>
	student.averageScore > highest.averageScore ? student : highest,
	students[0]
)

console.log(`Eng yuqori o‘rtacha bahoga ega talaba: ${topStudent.name}, O‘rtacha baho = ${topStudent.averageScore.toFixed(2)}`);

