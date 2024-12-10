const product = {
    productArr: [
        {
            id: 1,
            productName: "Iphone 13",
            productPrice: "4000",
        },
        {
            id: 2,
            productName: "Iphone 14",
            productPrice: "5000",
        },
        {
            id: 3,
            productName: "Iphone 15",
            productPrice: "6000",
        },
        {
            id: 4,
            productName: "Iphone 16",
            productPrice: "7000",
        },
        {
            id: 5,
            productName: "Iphone 13 pro",
            productPrice: "3500",
        }
    ],
    totalPrice: 0,
    buy(productId) {
        console.log(productId);
        
        const product = this.productArr.find(p => p.id === productId);
        const total=this.totalPrice += Number(product.productPrice);
        alert(`Sotib olindi: ${product.productName}, Narxi: ${product.productPrice}$`);
        alert(`Umumiy narx: ${total}$`);
    },
}