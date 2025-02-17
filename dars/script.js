let date = new Date()

let shortDate = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}).format(date)
console.log(shortDate)

let yearOnly = new Intl.DateTimeFormat('en-US', {
	year: 'numeric'
}).format(date)
console.log(yearOnly)

let monthYear = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long'
}).format(date)
console.log(monthYear) 