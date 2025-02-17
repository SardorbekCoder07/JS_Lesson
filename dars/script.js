const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')

const clock = () => {
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	hour<10?hours.textContent="0"+hour:hours.textContent=hour
	minute<10?minutes.textContent = "0" + minute : minutes.textContent = minute
	second < 10 ? seconds.textContent = "0" + second : seconds.textContent = second
}
setInterval(clock, 1000)