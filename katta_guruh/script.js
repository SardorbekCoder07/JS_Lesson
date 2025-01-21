/* Qilishimiz kerak bo'lgan ishlar
1.Hodisalarni (qiymatlar) array shaklida olish, faqat takrorlanmaydigan qiymatlar (no duplicates) bo'lsin.
2.64-daqiqada bo'lgan yellow card hodisasini o'chirish.
3.Har 9 daqiqada bitta hodisa bo'lganini ko'rsatuvchi stringni hisoblash va chop etish.
4.Har bir hodisani, birinchi yoki ikkinchi bo'limga tegishli ekanini aniqlab, konsolga chiqarish.
*/

const gameEvents = new Map([
	[17, '⚽GOAL'],
	[36, '🟨YELLOW CARD'],
	[47, '⚽GOAL'],
	[61, '🔀SUBSTITUTION'],
	[64, '🟨YELLOW CARD'],
	[69, '⚽GOAL'],
	[76, '🔀SUBSTITUTION'],
	[80, '🔴RED CARD'],
	[92, '⚽GOAL'],
])
console.log(gameEvents);


const eventOBJ = new Set(gameEvents.values())
const arrayEvent = [...eventOBJ]

//2
gameEvents.delete(64)
//3

const totalTime=Math.max(...gameEvents.keys())
const averageTime=totalTime/gameEvents.size
console.log(`Average time is ${Math.trunc(averageTime)} minutes`);

//4
for(const [minute,value] of gameEvents.entries()){
	const halftime=minute<=45?"First half":'Second half'
	console.log(`${halftime}:${minute}=>${value}`);
}


