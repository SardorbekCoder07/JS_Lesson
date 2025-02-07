let date=new Date()
const formatUseDate=(date,local)=>{
	return new Intl.DateTimeFormat(local,{
		year:'numeric',
		month:'long',
		day:'numeric',
		hour:'2-digit',
		minute:'2-digit',
		second:'2-digit',
		hour12:true
	}).format(date)
}
console.log(formatUseDate(date,'en-US'));
console.log(formatUseDate(date,'ru-RU'));
console.log(formatUseDate(date,'uz-UZ'));
console.log(formatUseDate(date,'fr-FR'));
console.log(formatUseDate(date,'de-DE'));
console.log(formatUseDate(date,'es-ES'));