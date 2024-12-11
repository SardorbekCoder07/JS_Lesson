// const product = {
//     productArr: [
//         { id: 1, productName: "Iphone 13", productPrice: 4000 },
//         { id: 2, productName: "Iphone 14", productPrice: 5000 },
//         { id: 3, productName: "Iphone 15", productPrice: 6000 },
//         { id: 4, productName: "Iphone 16", productPrice: 7000 },
//         { id: 5, productName: "Iphone 13 pro", productPrice: 3500 },
//     ],
//     totalPrice: 0,
//     discountThreshold: 10000, // Qanchalik narxdan keyin chegirma bo‘ladi
//     discountRate: 0.1, // 10% chegirma

//     buy(productId) {
//         // Mahsulotni qidirish
//         const selectedProduct = this.productArr.find(p => p.id === productId);

//         // Xatolikni tekshirish
//         if (!selectedProduct) {
//             alert("Mahsulot topilmadi. Iltimos, to'g'ri ID kiriting.");
//             return;
//         }

//         // Mahsulot narxini hisoblash va umumiy narxni yangilash
//         this.totalPrice += selectedProduct.productPrice;

//         // Mahsulot haqida xabar
//         alert(
//             `Sotib olindi: ${selectedProduct.productName}\nNarxi: ${this.formatCurrency(
//                 selectedProduct.productPrice
//             )}`
//         );

//         // Umumiy narx haqida xabar
//         this.checkDiscount();
//     },

//     // Chegirma tekshirish
//     checkDiscount() {
//         if (this.totalPrice > this.discountThreshold) {
//             const discount = this.calculateDiscount();
//             const finalPrice = this.totalPrice - discount;

//             alert(`Tabriklaymiz! Siz ${this.formatCurrency(discount)} chegirma oldingiz.`);
//             alert(`Chegirmadan keyingi umumiy narx: ${this.formatCurrency(finalPrice)}`);
//         } else {
//             alert(`Umumiy narx: ${this.formatCurrency(this.totalPrice)}`);
//         }
//     },

//     // Chegirma hisoblash
//     calculateDiscount() {
//         return this.totalPrice * this.discountRate;
//     },

//     // Xaridni yangidan boshlash
//     reset() {
//         if(this.totalPrice > 0){
//             this.totalPrice = 0;
//             alert("Xarid yangidan boshlandi!");
//         }else{
//             alert("Sizda hech narsa mavjud emas!");
//         }
//     },

//     // Narxni valyuta formatiga o'zgartirish
//     formatCurrency(price) {
//         return new Intl.NumberFormat("uz-UZ", {
//             style: "currency",
//             currency: "USD",
//             minimumIntegerDigits: 2,
//         }).format(price);
//     },
// };

// let age=confirm("Yoshingiz 18 dan katta yoki 18 ga tengmi");
// console.log(age);

// if(age){
//     alert("Sizga ruxsat beriladi");
// }else{
//     alert("Siz hali 18 dan kichik yoshdasiz shuning uchun biz sizga ruxsat bermadi");
// }

// let yosh = prompt("Yoshingizni kiriting");

// if (yosh >= 18) {
//   console.log("Sizga ruxsat beriladi.");  // Shart rost bo'lgani uchun bu ishga tushadi.
// } else {
//   console.log("Kirish taqiqlanadi.");
// }

// let installPin=prompt("Yangi parolni o'rnating");
// let confirmPin=prompt("Parolni tasdiqlang");
// if(installPin===confirmPin){
//     alert("Parol muvaffaqqiyatli o'rnatildi")
// }else{
//     alert("parollar bir birga mos kelmadi!")
// }

// let recomendation=prompt("Yoshingizni kiriting");
// if(recomendation>=18){
//     document.write("Siz 18 yoshdan kattasi siz kuproq hayotiy kinolar kurishingizni tavsiya qilamiz")
// }else if(recomendation>=15){
//     document.write("Siz 15 yoshdan kattasi siz kuproq fantastik kinolar kurishingizni tavsiya qilamiz")
// }else if(recomendation>=12){
//     document.write("Siz 12 yoshdan kattasi siz kuproq multik kinolar kurishingizni tavsiya qilamiz")
// }else{
//     document.write("Hohlagan ishingizni qiling")
// }