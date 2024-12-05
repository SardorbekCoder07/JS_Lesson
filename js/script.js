// const shop = {
//     products: [
//         { id: 1, productName: "Iphone 13", price: 4000 },
//         { id: 2, productName: "Iphone 14", price: 5000 },
//         { id: 3, productName: "Iphone 15", price: 6000 },
//         { id: 4, productName: "Iphone 16", price: 7000 }
//     ],
//     orders: [],
//     total: 0,
//     buy(productId){
//         const product=this.products.find(p=>p.id===productId);
//         this.orders.push(product);
//         this.total+=product.price;
//         alert(`Sotib olindi: ${product.productName}, Narxi: ${product.price}$`);
//         alert(`Umumiy narx: ${this.total}$`);
//     },
// }


// const students=[
//     {
//         student:'ali',
//         grades:[40,35,25,10]
//     },
//     {
//         student:'guli',
//         grades:[50,65,75,90]
//     },
//     {
//         student:'Qudrat',
//         grades:[15,10,25,10]
//     },
// ]
// let arr=[];
// for(let i=0;i<students.length;i++){
//     let average=0;
//     for(let j=0;j<students[i].grades.length;j++){
//         average+=students[i].grades[j];
//     }
//     let costAverage=(average/4).toFixed().toString();
//     arr.push(costAverage);

// }
// console.log(arr.sort((a,b)=>b-a));

// //average grades

// const laLiga=[
//     {team:'Real Madrid',points:33},
//     {team:'Barcelona',points:37},
//     {team:'Atletico',points:32},
//     {team:'Valencia',points:29},
//     {team:'Sevilla',points:26},
//     {team:'Celta',points:24},
// ]
// let highPointTema=laLiga.sort((a,b)=>b.points-a.points)


// let a=highPointTema.map((i,index)=>{
//     console.log(`${index+1}:${i.team} --- point:${i.points}`);
// })

// console.table(highPointTema);


// const student = {
//     name: "Ali",
//     age: 20,
// };

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }

// const person=['sardorbek',1,2,3]
// for(const i in person){
//     console.log(`${i}`);
// }

// const numbers = [10, 20, 30];

// for (const index in numbers) {
//   console.log(`Index: ${index}, Value: ${numbers[index]}`);
// }

// const numbers = [10, 20, 30];

// for (const jasmina in numbers) {
//   console.log(jasmina);
// }

// const word = "JavaScript";

// for (const char in word) {
//   console.log(char);
// }


// let arr=[1,2,3,4,5,6,658,7,4,5,8,7]
// for(let i of arr){
//     console.log(i);
// }

// const person={
//     firstName:"Sardorbek",
//     birthYeah:2003,
//     isDeveloper:true,
//     calcAge:function(){
//         return console.log(this,'---*------');
//     }
// }
// console.log(person.calcAge());
// console.log(this);


// const person = {
//     name: "Sardor",
//     age: 25,
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     },
//   };
  
//   person.greet(); 