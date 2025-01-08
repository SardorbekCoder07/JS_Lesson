// const obj = { key1: "value1", key2: "value2" }

// const { key1, key2 } = obj

// console.log(key1) // "value1"
// console.log(key2) // "value2"


//while takrorlash operatori
// let i = 0//0 1ish 1 1ish 10
// while (i < 10) {//0<10 true 2ish, 1<10 true 2ish 10<10 false 
// 	console.log(i)// 0 3ish 1 3ish
// 	i++//0->1 ga oshyapti  4ish 1->2 ga oshyapti 4ish
// } 

// let firstName = "Sardorbek Sayfullayev"
// let i = 0
// while (i < firstName.length) {
// 	console.log(firstName[i])
// 	i++
// }

// let i = 1
// while (i < 5) {
// 	console.log(i)
// 	i++
// }
// let i = 1
// while (i <= 5) {
// 	console.log(i)
// 	i++
// }

// let i = 10
// while (i <=20) {
// 	if (i % 2 === 1) {
// 		console.log(`${i} soni toq son`)
// 	}
// 	i++
// }

// let passWord = prompt("Parolingizni kiriting paroilingiz kamida bitt  _  pastki chiziqcha bulishi kerak")
// if (passWord.includes('_')) {
// 	alert("ZUR")
// } else {
// 	let i = 0
// 	while (i < passWord.length) {
// 		passWord = prompt("Parolingizni kiriting paroilingiz kamida bitt  _  pastki chiziqcha bulishi kerak")
// 	}
// }

// let i = 0
// do {
// 	console.log(i)
// 	i++
// } while (i < 10)

// let password
// do {
// 	password = prompt("Parolni kiriting:")
// } while (password !== "1234")

// console.log("To‘g‘ri parol kiritildi!")

// let i = 10
// do {
// 	console.log(i)
// 	i--
// } while (i > 0)

// for (let i = 1; i <= 10; i++) {
// 	console.log(i **2)
// }

// for (let i = 5; i <= 15; i++) {
// 	console.log(i)
// }
//kara jadval chiqarish

// for (let i = 1; i <= 20; i++) {
// 	for (let j = 1; j <= 20; j++) {
// 		console.log(`${i}*${j}=${i * j}`)
// 	}
// 	console.log("--------------");

// }

// for (let i = 3; i <= 5; i++) {
// 	let row = ''
// 	for (let j = 1; j <= i; j++) {
// 		row += '*'
// 	}
// 	console.log(row)
// }


// for (let i = 1; i < 10; i++) {
// 	if (i === 5) {
// 		break
// 	}
// 	console.log(i)

// }

let word = 'Muhammadrahimxon'//input
let unf = ''
for (let i = word.length - 1; i >= 0; i--) {
	unf += word[i]
}
console.log(unf)