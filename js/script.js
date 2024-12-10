// const product = {
//     productArr: [
//         { id: 1, productName: "Iphone 13", productPrice: "4000" },
//         { id: 2, productName: "Iphone 14", productPrice: "5000" },
//         { id: 3, productName: "Iphone 15", productPrice: "6000" },
//         { id: 4, productName: "Iphone 16", productPrice: "7000" },
//         { id: 5, productName: "Iphone 13 pro", productPrice: "3500" },
//     ],
//     totalPrice: 0,

//     buy(productId) {
//         // Mahsulotni qidirish
//         const selectedProduct = this.productArr.find(p => p.id === productId);

//         // Xatolikni tekshirish
//         if (!selectedProduct) {
//             alert("Mahsulot topilmadi. Iltimos, to'g'ri ID kiriting.");
//             return;
//         }

//         // Mahsulot narxini hisoblash va umumiy narxni yangilash
//         this.totalPrice += Number(selectedProduct.productPrice);

//         // Mahsulot haqida xabar
//         alert(
//             `Sotib olindi: ${selectedProduct.productName}\nNarxi: ${this.formatCurrency(
//                 selectedProduct.productPrice
//             )}`
//         );

//         // Umumiy narx haqida xabar
//         alert(`Umumiy narx: ${this.formatCurrency(this.totalPrice)}`);

//         // Konsolga loglash
//         console.log(
//             `Mahsulot: ${selectedProduct.productName}, Narxi: ${this.formatCurrency(
//                 selectedProduct.productPrice
//             )}, Umumiy narx: ${this.formatCurrency(this.totalPrice)}`
//         );
//     },

//     // Narxni valyuta formatiga o'zgartiruvchi yordamchi funksiya
//     formatCurrency(price) {
//         // return new Intl.NumberFormat("uz-UZ", {
//         //     style: "currency",
//         //     currency: "USD",
//         // }).format(price);
//         return new Intl.NumberFormat("ru-RU",{
//             style:"currency",
//             currency:"UZS",
//         }).format(price)
//     },
// };


