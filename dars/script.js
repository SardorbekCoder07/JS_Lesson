/* Arraydan minimal yoki maksimal sonni toppish */
/* const arr = [13, 24, -5, 45, 56, 56.1]
const min_andA_max = (arr) => {
	let min = arr[0]
	let max = arr[0]

	for(let i=0; i<arr.length; i++){
		if(arr[i]<min){
			min=arr[i]
		}

		if(arr[i]>max){
			max=arr[i]
		}
	}

	return {max,min}
}
console.log(min_andA_max(arr));
 */
/* 
const arr = [13, 24, -5, 45, 56, 56.1]
const total = (arr) => {
	let sum=0

	for(let i=0; i<arr.length; i++){
		sum+=arr[i]
	}

	return sum
}

console.log(total(arr));
 */

/* 1. Arraydan minimal yoki maksimal sonni toppish
2.Array ichidagi elementlarni qo‘shish (yig‘ish)
3.Array ichidagi maxsus elementlarni chiqarish Masalan, faqat juft sonlarni chiqarish:
4.Array ichidagi barcha elementlarni chiqarish
5.Arraydagi juft sonlarni chiqaruvchi funksiya yozing.
6. Arraydagi toq sonlarni chiqaruvchi funksiya yozing.
7.Arraydagi elementlarning yig‘indisini hisoblaydigan funksiya yozing.
8.Arraydagi eng katta sonni topuvchi funksiya yozing.
9. Arraydagi eng kichik sonni topuvchi funksiya yozing.
10.Arraydagi musbat sonlarni chiqaruvchi funksiya yozing.
11.Arraydagi manfiy sonlarni chiqaruvchi funksiya yozing.
12.Arrayning barcha elementlarini kvadrat qilib qaytaruvchi funksiya yozing.
13.Arraydagi ma’lum bir qiymat nechta marta takrorlanganini toping.
14.Arrayni teskari qilib chiqaruvchi funksiya yozing.
15.Arraydagi barcha musbat sonlarning yig‘indisini hisoblovchi funksiya yozing.
16.Arrayda berilgan element bor-yo‘qligini tekshiruvchi funksiya yozing
17.Arrayning ma’lum bir elementini almashtiruvchi funksiya yozing.
18.Berilgan massivdan elementlarni faqat juft indekslardan chiqaruvchi funksiya yozing.
19.Arraydagi elementlar sonini qaytaruvchi funksiya yozing.
20.Array ichidagi musbat va manfiy sonlarni alohida arraylar qilib chiqaruvchi funksiya yozing.
21. Arraydan faqat noyob (takrorlanmagan) elementlarni ajratib olish.
22.Arrayda ma'lum bir qiymatdan katta sonlarni ajratib chiqaruvchi funksiya yozing.
23.Arraydagi 0 ni 1 ga o‘zgartiruvchi funksiya yozing
24. Arraydagi har bir elementni toq son bo‘lsa kvadratga oshiruvchi funksiya yozing. */


/* 
const arr = [1, 2, 3, 4, 5, 6]

const reversFunc = (param) => {
	let reverse=[]
	for(let i=param.length-1;i>=0;i--){
		reverse.push(param[i])
	}

	return reverse
}
const simple=reversFunc(arr)
console.log(simple);
 */
/*
const arr = [2, 3, 2, 4, 5, 5, 6, 7, 3, 2]

const repeatArr = (arr, element) => {
	let count=0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			count++
		}
	}

	return `${element}: ${count} marta takrorlangan`
}
const simple = repeatArr(arr, 7)
console.log(simple)
 */

// const arr = [10,23,67]

// const numberSquare = (param) => {
// 	let nestedArr = []
// 	for (let i = 0; i < param.length; i++) {
// 		nestedArr.push(param[i] ** 2)
// 	}

// 	return nestedArr
// }
// const simple=numberSquare(arr)
// console.log(simple);


/* const arr = [13, 24, -5, 45, 56, 56.1]

const minmax = (parametr) => {
	let min = parametr[0]
	let max = parametr[0]
	for (let i = 0; i < parametr.length; i++) {
		if (parametr[i] > max) {
			max = parametr[i]
		}
		if (min > parametr[i]) {
			min = parametr[i]
		}
	}

	return { max, min }
}

const simple=minmax(arr)
console.log(simple); */


// const arr = [1, 2, 3];
// arr.pop(); 
// console.log(arr)

// const arr = [1, 2, 3];
// arr.unshift(0) 
// console.log(arr);

// const arr = [1, 2, 3];
// arr.shift(); 
// console.log(arr);

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray("hello")); 
// console.log(Array.isArray({ key: "value" })); 


// const arr = Array.of(1, 2, 3, 4);
// console.log(arr); 

// const singleElementArray = Array.of(5);
// console.log(singleElementArray); 


// const numbers = [10, 20, 30, 40];
// console.log(numbers.at(1));

// const numbers = [10, 20, 30, 40];
// console.log(numbers.at(-1)); 
// console.log(numbers.at(-3)); 

// const data = []
// if (Array.isArray(data)) {
// 	console.log("Bu massiv!")
// } else {
// 	console.log("Bu massiv emas.")
// }

// const newArr= new Array([1,2,3,4])
// const arr = Array.of(1, 2, 3, 4)
// console.log(arr,newArr)

// const numbers = [10, 20, 30, 40]
// const arr = [13, 24, -5, 45, 56, 56.1]

// const newArr=arr.concat(numbers)
// console.log(newArr);

// let numbers = [1, 2, 3];
// let result = numbers.concat(4, 5, 6);

// console.log(result); 
// let nested = [[1, 2], [3, 4]]
// let result = nested.concat([[5, 6]])

// console.log(result);


// let fruits = ["apple", "banana", "cherry", "date", "fig"]
// let slicedFruits = fruits.slice(1, 3)

// console.log(slicedFruits)
// console.log(fruits)


// let numbers = [1, 2, 3, 4, 5]
// let lastTwo = numbers.slice(-2)

// console.log(lastTwo) 

// let numbers = [10, 20, 30, 40, 50]
// console.log(numbers.includes(30, 2))
// console.log(numbers.includes(10, 2))

// let numbers = [12, 34, 34, 43, 67, 27, 1]
// let newaArr = []
// numbers.find(
// 	(element) => {
// 		if (element > 30) {
// 			newaArr.push(element)
// 		}
// 	}
// )
// console.log(newaArr);

// let words = ["Onana", "banana","dsada", "cherry"]

// let word = words.find((word) => word.includes("na"))
// console.log(word)

// let items = [1, 3, 5, 7];

// let result = items.find((item) => item % 2 === 0);
// console.log(result); 

// let numbers = [4, 9, 16, 25]

// let found = numbers.find((num, index, array) => {
// 	if (num > 20) {
// 		console.log(`Tekshirilayotgan qiymat: ${num}, indeks: ${index}`)
// 		return num
// 	}

// })
// console.log(found)


// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach((num,inx) => {
// 	console.log(`${inx+1}-indeks:${num}`)
// })

// let numbers = [10, 20, 30]
// let sum = 0

// numbers.forEach(num => sum += num)

// console.log(sum)

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);

// console.log(doubled); 

// let fruits = ["apple", "banana", "cherry"];
// let lengths = fruits.map(fruit => fruit.length);

// console.log(lengths); 

// let numbers = [1, 2, 3, 4, 5, 6]
// let evenNumbers = numbers.filter(num => num % 2 === 0)

// console.log(evenNumbers) 

// let words = ["apple", "banana", "kiwi", "cherry"]
// let longWords = words.filter(word => word.length > 5)

// console.log(longWords) 

// let mixedArray = [1, null, 2, undefined, 3, null];
// let cleanArray = mixedArray.filter(value => value === null && value === undefined);

// console.log(cleanArray); 


// let products = ["Apple iPhone", "Apple iPhone 13", "Apple iPhone 14","Samsung Galaxy", "Google Pixel", "OnePlus"];
// let search = prompt("Mahsulot nomini kiriting va men mahsulotni topip beraman");

// let searchResult = products.filter(product =>
//   product.toLowerCase().includes(search.toLowerCase())
// );

// console.log(searchResult);

// let fruits = ["banana", "apple", "cherry"];
// fruits.sort();
// console.log(fruits);

// let numbers = [30, 1, 4, 21, 100000];
// numbers.sort();
// console.log(numbers); 

// let numbers = [50, 5, 10, 25, 1]

// numbers.sort((a, b) => b-a)
// console.log(numbers) 

// let words = ["elephant", "cat", "butterfly", "ant"]

// words.sort((a, b) => a.length - b.length)
// console.log(words) 

const formValidator = new MyFormValidator()


function MyFormValidator() {
	this.name = ""
	this.email = ""
	this.password = ""
	this.errors = {
		name: false,
		email: false,
		password: false
	}
	this.validateName = function () {
		const nameInput = document.getElementById('name')
		const nameError = document.getElementById('nameError')
		if (nameInput.value.trim() === '') {
			nameError.classList.remove('hidden')
			this.errors.name = true
		} else {
			nameError.classList.add('hidden')
			this.errors.name = false
		}
	}



	this.submitForm = function (event) {
		event.preventDefault()
		this.validateName()

		if(!this.errors.name) {
			alert('Forma muvaffaqiyatli yuborildi')
		}
	}
}

