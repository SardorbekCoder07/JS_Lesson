// console.log(5 === '5');  // false (string va number mos emas)
// console.log(true !== 1);  // false (boolean va number mos emas)
// console.log(false === 0);  // false (boolean va number mos emas)
// console.log(null === undefined);  // false (turli xil qiymatlar)
// console.log('' === 0);  // false (string va number mos emas)
// console.log(5 === 5);  // true (bir xil qiymat va tur)
// console.log(Symbol(5)===Symbol(5));
// const obj={
// 	name:'John',
// 	age:5
// }
// const obj2={
// 	name:'John',
// 	age:5
// }
// console.log(obj.age===obj2.age);


// let age = '18';  // Stringda saqlangan

// if (age == 18) {
//   console.log("Yosh mos keldi.");  // true (string '18' son 18 ga aylantirildi)
// }

// if (age === 18) {
//   console.log("Yosh to'g'ri keldi.");  // Bu ishlamaydi, chunki string va number mos emas.
// }
// //----------------------------------------
// let isLoggedIn = 1;  // 1: foydalanuvchi tizimga kirgan

// if (isLoggedIn == true) {
//   console.log("Foydalanuvchi tizimda.");
// }

// if (isLoggedIn === true) {
//   console.log("Bu qism ishlamaydi.");  // false, chunki 1 va true turli tiplar.
// }


// console.log(null == undefined); //true 
// console.log(null === undefined); // false
// console.log(null != undefined);   //false
// console.log(null !== undefined); //true
// console.log('5' == 5);    //true
// console.log('5' === 5);   //false
// console.log('0' == false); //true
// console.log('0' === false);//false
// console.log(1 == true);    //true
// console.log(1 === true);   //false
// console.log(0 == false);   //true
// console.log(0 === false);//false
// console.log('true' == true); //true
// console.log('false' == false); //true
// console.log('true' === true); //falsw
// console.log('' == false);   //true
// console.log('' === false);  //false
// console.log(NaN == NaN);   //true
// console.log(BigInt(4) === BigInt(4))  //false
// console.log(NaN != NaN);   //true
// console.log(NaN !== NaN);  //false
// let firstName=prompt("Ismingizni kiriting");
// document.write(firstName.toLowerCase())

// let text = "Sar dorbek"
// let char = text.charAt(3)
// console.log(char)

// let name1 = "Sardorbeak"
// let result = name1.lastIndexOf("a")
// console.log(result)
// let text = "sardorbekcoder@gmail.com"
// console.log(text.includes("@gmail.com"))
// console.log(text.includes("Java")) 

// let email=prompt('Yangi emailni kiriting')
// if(email.includes("@gmail.com")){
// 	alert("Email muvaffaqiyatli yuborildi")
// }else{
// 	alert("Siz @gmail.com yozmadingiz")
// }
// let text = "Helloworld!"
// // console.log(text.startsWith("Hello"))
// console.log(text.startsWith("world")) 

// let phoneNumber=prompt("raqamingizni kiriting")
// if(phoneNumber.startsWith('+998')){
// 	alert("Raqamingiz muvaffaqiyatli yuborildi")
// }else{
// 	alert('Mamlakatingizni telefon raqam kodini quyishingiz shart masalan +998')
// }

// let text = "Hello world!"
// console.log(text.endsWith("world!")) // true
// console.log(text.endsWith("Hello"))  // false

// let text = "Helloworld!"
// console.log(text.substring(-7,1))

// let str = "JavaScript"
// console.log(str.substring(0, 4))

// let str = "JavaScript"
// console.log(str.substring(4))


// let str = "JavaScript"
// console.log(str.substring(-3, 6)) 
// let str = "JavaScript"
// console.log(str.substring(-2,4))

// const greeting = "Salom, Sardorbek!"
// const slicedPart = greeting.substring(7)

// console.log(slicedPart) 
// const message = "Front-end dasturlash"
// const lastPart = message.slice(-2)

// console.log(lastPart) 

