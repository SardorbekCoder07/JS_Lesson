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

const arr = [13, 24, -5, 45, 56, 56.1]

const minmax = (parametr) => {
	let min = parametr[0]
	let max = parametr[0]
	for (let i = 0; i < parametr.length; i++) {
		if (parametr[i] > max) {
			max = parametr[i]
		}
		if (min < parametr[i]) {
			min = parametr[i]
		}
	}

	return { max, min }
}

const simple=minmax(arr)
console.log(simple);
