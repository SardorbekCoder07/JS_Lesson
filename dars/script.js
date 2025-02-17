const countDown = (seconds) => {
	console.log(seconds);
	
	const interval = setInterval(() => {
		seconds--
		console.log(seconds)
		if (seconds === 0) {
			clearInterval(interval)
			console.log("Time is up");
			
		}
	}, 1000)
}
countDown(5)