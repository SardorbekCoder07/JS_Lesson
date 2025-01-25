// let carsArr=["BMW","Audi","Mercedes","Lada"]
// console.log(carsArr[4]);

// let arr=[1,2,3,4,5]
// console.log(arr[4]);

// let arr=[1,true,"string",null,undefined]
// console.log(typeof arr);

// arraylarni yaratishni ikki xil usuli mavjud 1 konstruktor yoki funksiya ikkinchisi default array yaratish

// let arr=new Array([1,true,"string",null,undefined])
// console.log(arr[4]);


/* arrayga indeks qushish hamda mavjuda indeksni yangi qiymatga alamashtirish */

// let fruits = ["Apple", "Orange", "Plum"]// asl massiy
// fruits[3] = "Kiwi"//yangilangan massiv 
// console.log(fruits);


/* massivni uzunligini topish*/

// let arr=[1,2,3,4,5]
// console.log(arr.length);

/* massiv qiymatlarini boshqa bir uzgaruvchiga saqlash */

// let arr=[1,2,3,4,5]
// let inx5=arr[4]
// console.log(inx5);

/* massiv elementlarin for operatorsidan foydalanish*/

// let names=["Ali","Vali","Hasan","Husan"]


// for(let i=0;i<names.length;i++){
// 	console.log(`${i+1}-element: ${names[i]}`);
// }

// let newArr=['ara']
// let arr=['ara']
// console.log(arr===newArr);

/* problem soolving */
/* 1-problem arr clone */

// const array_Clone = (arr) => {
// 	return arr.slice(0)
// }
// console.log(array_Clone([1, 2, 4, 0]))

/* nested array */
// let arr=[1,2,3,[4,5,6]]
// console.log(arr[3][2]);

/* 2 check arr  */

// const is_Arr = (arr) => {
// 	return Array.isArray(arr)
// }
// console.log(is_Arr('w3resource'))
// console.log(is_Arr([1, 2, 4, 0]));


/* 3 get first element the array */
// const first = (arr, n = 1) => {
// 	if (n < 0) {
// 		return []
// 	} else {
// 		return arr.slice(0, n)
// 	}
// }

// console.log(first([7, 9, 0, -2]))
// console.log(first([], 3))
// console.log(first([7, 9, 0, -2], 3))
// console.log(first([7, 9, 0, -2], 6))
// console.log(first([7, 9, 0, -2], -3)) 

/* 4 get last element the array */
// const last = (arr, n = 1) => {
// 	if (n < 0) {
// 		return []
// 	} else {
// 		return arr.slice(-n)
// 	}
// }

// console.log(last([7, 9, 0, -2]))
// console.log(last([7, 9, 0, -2], 3))
// console.log(last([7, 9, 0, -2], 6))

// let array = [1, 2, 3]
// array[6] = 9
// console.log(array[5])
// console.log(0.1+0.2===0.1+0.2);

// console.log(typeof typeof typeof 1);
// console.log(3 > 2 > 1);

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
// const isTrue = true == [];
// console.log(isTrue);
// const numbers = [33, 2, 8]; 
// numbers.sort();
// console.log(numbers[1]);
// var x = 0o12;
// console.log(x); //8



// Tasodifiy matnlar ro'yxati (array)
const texts = [
	"JavaScript ni o'rganish juda qiziqarli.",
	"Foydalanuvchi yozgan matnni tekshirish testda.",
	"Bu yerda ko'plab harflar va so'zlar mavjud.",
	"Yozish tezligini oshirish uchun mashq qiling.",
	"Matnni tez va to'g'ri yozish juda muhim."
]

let timer = 0
let isTyping = false
let startTime
let timerInterval
let wordCount = 0
let correctCharCount = 0

const textElement = document.getElementById('text')
const inputField = document.getElementById('input-field')
const timerElement = document.getElementById('timer')
const wpmElement = document.getElementById('wpm')
const accuracyElement = document.getElementById('accuracy')
const startBtn = document.getElementById('start-btn')

// Tasodifiy matnni tanlash
function randomText() {
	return texts[Math.floor(Math.random() * texts.length)]
}

function startTimer() {
	startTime = Date.now()
	timerInterval = setInterval(() => {
		timer = Math.floor((Date.now() - startTime) / 1000) // vaqtni sekundlarda hisoblash
		timerElement.textContent = timer
	}, 1000)
}

function calculateWPM() {
	const typedWords = inputField.value.trim().split(/\s+/).length
	const wpm = Math.floor((typedWords / timer) * 60)
	wpmElement.textContent = wpm
}

function calculateAccuracy() {
	const typedText = inputField.value
	const originalText = textElement.textContent
	let correctChars = 0

	for (let i = 0; i < typedText.length; i++) {
		if (typedText[i] === originalText[i]) {
			correctChars++
		}
	}

	const accuracy = Math.floor((correctChars / originalText.length) * 100)
	accuracyElement.textContent = accuracy
}

function resetTest() {
	inputField.value = ''
	textElement.textContent = randomText() // Tasodifiy matnni ko'rsatish
	timer = 0
	wordCount = 0
	correctCharCount = 0
	clearInterval(timerInterval)
	timerElement.textContent = '0'
	wpmElement.textContent = '0'
	accuracyElement.textContent = '100'
}

startBtn.addEventListener('click', () => {
	resetTest()
	startBtn.style.display = 'none' // Boshlash tugmasini yashirish
	inputField.disabled = false
	inputField.focus()
	startTimer()
})

inputField.addEventListener('input', () => {
	if (!isTyping) {
		isTyping = true
		startTimer() // vaqtni boshlash
	}

	calculateAccuracy()
	calculateWPM()

	if (inputField.value === textElement.textContent) {
		clearInterval(timerInterval)
		alert(`Yozish tugadi! \nVaqt: ${timer} sekund \nTezlik: ${wpmElement.textContent} so'z/minut \nAniqlik: ${accuracyElement.textContent}%`)
		startBtn.style.display = 'block' // Test tugagach, boshlash tugmasini qaytarish
	}
})
