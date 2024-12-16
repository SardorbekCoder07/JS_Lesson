// let num = 123;//number
// let bool = true;//boolean
// let str = String(num); //string
// console.log(str, typeof str);
// console.log(typeof String(Boolean));

// let num = 456;
// let bool = false;
// console.log(typeof false.toString());
// // console.log(num.toString()); 
// // console.log(bool.toString()); 

// let value = null;
// console.log(typeof String(undefined));

// let a=123
// let bool=true
// let c=null
// console.log(typeof `${a}`);


// let str = "123";
// let bool = true;
// let invalidStr = "abc";

// console.log(Number(str)); // 123
// console.log(Number(bool)); // 1
// console.log(Number(invalidStr));

// let strInt = "123.45";
// let strFloat = "123151651564165416541abc123.45abc";

// console.log( parseInt(strInt)); // 123
// console.log( parseFloat(strFloat)); // 123.45

// let str = "456";
// let bool = false;
// let invalidStr = "xyz";

// console.log(+str); // 456
// console.log(+bool); // 0
// console.log( +-NaN);

// let str = "789.56";
// let bool = true;

// console.log(typeof Math.floor(str)); // 789
// console.log(typeof Math.ceil(str)); // 790
// console.log(typeof Math.round(str)); // 790
// console.log(typeof Math.floor(bool));

// console.log(typeof Number(null)); // 0
// console.log(typeof Number(undefined)); 

// console.log("123" * 1);    // 123
// console.log("45.67" * 1);  // 45.67
// console.log(true * 1);     // 1
// console.log(false * 1);    // 0
// console.log("hello" + 1); 

// let num = 5;
// let str = "10";
// let result = "5"+"10"; 
// console.log(result, typeof result); 

// console.log(5 === "5");

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// let x = "5";
// let y = 10;

// console.log(x + y); 
// console.log(Number(x) + y); 
// const person={
// 	firstName:"sardorbek"
// }
// console.log(person["firstName"])

// console.log("JavaScript".charAt(4));
// function arrayMin(arr) {
//   return arr.reduce(function (p, v) {
//     return ( p < v ? p : v );
//   });
// }

// function arrayMax(arr) {
//   return arr.reduce(function (p, v) {
//     return ( p > v ? p : v );
//   });
// }

// console.log(arrayMin([1, 2, 3, 4, 5]));
// console.log(arrayMax([1, 2, 3, 4, 5]));



// Foydalanuvchilar ro'yxati
// const users = [];

// // 1. Yangi foydalanuvchini ro'yxatga qo'shish funksiyasi
// function addUser(user) {
//   // Email takrorlanmasligini tekshirish
//   const existingUser = users.find((u) => u.email === user.email);
//   if (existingUser) {
//     console.log(`Foydalanuvchi ${user.email} email bilan allaqachon mavjud.`);
//     return;
//   }
//   users.push(user);
//   console.log(`Foydalanuvchi ${user.name} muvaffaqiyatli qo'shildi.`);
// }

// // 2. Foydalanuvchini email orqali o'chirish funksiyasi
// function deleteUser(email) {
//   const userIndex = users.findIndex((u) => u.email === email);
//   if (userIndex !== -1) {
//     const deletedUser = users.splice(userIndex, 1); // Foydalanuvchini o'chirish
//     console.log(`Foydalanuvchi ${deletedUser[0].name} muvaffaqiyatli o'chirildi.`);
//   } else {
//     console.log(`Foydalanuvchi ${email} email bilan topilmadi.`);
//   }
// }

// // 3. Foydalanuvchi ma'lumotlarini yangilash funksiyasi
// function updateUser(email, newData) {
//   const user = users.find((u) => u.email === email);
//   if (user) {
//     Object.assign(user, newData); // Foydalanuvchi ma'lumotlarini yangilash
//     console.log(`Foydalanuvchi ${email} muvaffaqiyatli yangilandi.`);
//   } else {
//     console.log(`Foydalanuvchi ${email} email bilan topilmadi.`);
//   }
// }

// // 4. Foydalanuvchilar ro'yxatini ko'rsatish funksiyasi
// function listUsers() {
//   if (users.length === 0) {
//     console.log("Foydalanuvchilar ro'yxati bo'sh.");
//     return;
//   }

//   console.log("Foydalanuvchilar ro'yxati:");
//   users.forEach((user, index) => {
//     console.log(`${index + 1}. Ism: ${user.name}, Yosh: ${user.age}, Email: ${user.email}`);
//   });
// }

// // === Dasturdan foydalanish ===
// // Yangi foydalanuvchilar qo'shish
// addUser({ name: "Ali", age: 25, email: "ali@mail.com" });
// addUser({ name: "Laylo", age: 30, email: "laylo@mail.com" });
// addUser({ name: "Bek", age: 22, email: "bek@mail.com" });

// // Takrorlanmaslik uchun tekshiruv
// addUser({ name: "Ali", age: 26, email: "ali@mail.com" }); // Bu xato beradi

// // Foydalanuvchilar ro'yxatini ko'rish
// listUsers();

// // Foydalanuvchini yangilash
// updateUser("laylo@mail.com", { age: 31, name: "Laylo Mahmudova" });
// listUsers();

// // Foydalanuvchini o'chirish
// deleteUser("bek@mail.com");
// listUsers();

// // Foydalanuvchini topa olmasa
// deleteUser("nodir@mail.com");