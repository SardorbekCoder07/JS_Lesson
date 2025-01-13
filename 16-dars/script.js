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