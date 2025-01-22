/* const person=[
	"John",
	30,
	true,
]
for(const i of person){
	console.log(`${i}`)
} */

/* const numbers = [10, 20, 30]

for (const i of numbers) {
	console.log(`Index: ${i}`)
}
 

*/
/* const word = "JavaScript"

for (const char in word) {
	console.log([char])
} */


/* const person = {
	name1: "Sardor",
	age: 25,
	greet() {
		console.log(`Hello, my name is ${this.age} and I am ${this.age} years old.`)
	},
}

person.greet()  */

/* const person = {
	name: "Sardor",
	greet() {
		console.log(`Outer function: ${this.name}`)
		function innerFunction() {
			console.log(`Inner function: ${this.confirm('aminmisan')}`)
		}

		innerFunction()
	},
}

person.greet() */
/* 
const person = {
	name: "Sardor",
	innerFunction () {
		console.log(`Inner function: ${this.name}`)
	}
}

person.innerFunction() 
 */
/* 
const person = {
	name: "Sardor",
	greet() {
		console.log(`Hello, ${this.name}`)
	},
}

const fn = person.greet
fn()
 */

const team = {
	name: "Barcelona",
	players: ["Messi", "Xavi", "Iniesta"],
	showPlayers() {
		this.players.forEach(player=>{
			return console.log(player);
			
		})
	},
}

team.showPlayers() 