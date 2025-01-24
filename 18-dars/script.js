// const showBtn = document.getElementById("showBtn")
// const removeBtn = document.getElementById("removeBtn")
// const count = document.getElementById("count")
// const product = {
// 	productArr: [
// 		{ id: 1, productName: "Iphone 13", productPrice: 4000 },
// 		{ id: 2, productName: "Iphone 14", productPrice: 5000 },
// 		{ id: 3, productName: "Iphone 15", productPrice: 6000 },
// 		{ id: 4, productName: "Iphone 16", productPrice: 7000 },
// 		{ id: 5, productName: "Iphone 13 pro", productPrice: 3500 },
// 	],
// 	selectProduct: [],
// 	totalPrice: 0,
// 	discount: 10000,
// 	buy(id) {
// 		const selectedProduct = this.productArr.find(product => {
// 			return product.id === id
// 		})
// 		if (selectedProduct) {
// 			this.selectProduct.push(selectedProduct)
// 			this.totalPrice += selectedProduct.productPrice
// 			this.countSelect()
// 			setTimeout(() => {
// 				alert(`${selectedProduct.productName} savatga qo'shildi, narxi: ${selectedProduct.productPrice} `)
// 			}, 200)

// 		} else {
// 			alert("Bunday mahsulot mavjud emas")
// 		}
// 	},
// 	showSelectedProduct() {
// 		const show = this.selectProduct.map((product, index) => {
// 			return `${index + 1}) Mahsulot nomi:${product.productName} - Narxi:${product.productPrice}$\n`
// 		})
// 		if (show.length > 0) {
// 			showBtn.style.backgroundColor = "#4caf50"
// 			setTimeout(() => {
// 				alert(show.join(""))
// 				alert(`Jami narx:${this.totalPrice}$`)
// 			}, 200)
// 		} else {
// 			showBtn.style.backgroundColor = "red"
// 		}
// 	},
// 	checkDiscount() {
// 		if (this.selectProduct.length > 0) {
// 			if (this.totalPrice > this.discount) {
// 				const confirmed = confirm(`Siz 10% gacha chegirmaga ega buldingiz chegirmadan foydalanasizmi`)
// 				if (confirmed) {
// 					alert(`Chegirma orqali siz xarid qilgan narx :${this.totalPrice - (this.totalPrice * 0.1)
// 						}`)
// 				}
// 			} else {
// 				alert(`Sizda chegirma bulishi uchun savatdagi umumiy mahsulotlaringizni narxi 10000$ dan ko'p bulishi kerak`)
// 			}
// 		} else {
// 			alert(`Sizda chegirma bulishi uchun savatdagi umumiy mahsulotlaringizni narxi 10000$ dan ko'p bulishi kerak`)
// 		}
// 	},
// 	remove() {
// 		if (this.selectProduct.length > 0) {
// 			removeBtn.style.backgroundColor = "#4caf50"
// 			setTimeout(() => {
// 				let confirmed = confirm(`Siz savatdagi mahsulotlarni o'chirmoqchimisiz?`)
// 				if (confirmed) {
// 					this.selectProduct = []
// 					this.countSelect()
// 				}
// 			}, 200)
// 		} else {
// 			removeBtn.style.backgroundColor = 'red'
// 		}
// 	},
// 	countSelect() {
// 		if (this.selectProduct.length > 0) {
// 			count.textContent = this.selectProduct.length
// 		} else {
// 			count.textContent = 0
// 		}
// 	}
// }