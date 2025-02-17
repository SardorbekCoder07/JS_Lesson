let date = new Date()

const formatDate = (localDate, current) => {
	return new Intl.DateTimeFormat(current, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour24: true
	}).format(localDate)
}

let en=formatDate(date,'en-US')
let ru=formatDate(date,'ru-RU')
let uz=formatDate(date,'uz-UZ')
let fr=formatDate(date,'fr-FR')
let de=formatDate(date,'de-DE')
console.log(en);
console.log(ru);
console.log(de);
console.log(fr);
console.log(uz);