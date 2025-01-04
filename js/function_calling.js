// function sayHello(name) {
// 	return "Salom, " + name + "!"
// }


// function greetUser() {
// 	const message = sayHello("Sardorbek")
// 	console.log(message)
// }

// greetUser()

// function multiply(a, b) {
// 	return a * b
// }

// function add(a, b) {
// 	return a + b
// }

// function calculate(a, b) {
// 	const product = multiply(a, b)
// 	const sum = add(a, b)
// 	return `Yig'indisi: ${sum}, Ko'paytmasi: ${product}`
// }

// console.log(calculate(5, 3));
// const qushish = (a, b) => {
// 	return a + b
// }
// const kopaytirish = (a, b) => {
// 	return a * b
// }
// const ayrish = (a, b) => {
// 	return a - b
// }
// const bulish = (a, b) => {
// 	return a / b
// }

// const calculate = (a, b, operation) => {
// 	if (operation === "*") {
// 		const kup = kopaytirish(a, b)
// 		return kup
// 	} else if (operation === "/") {
// 		const bul = bulish(a, b)
// 		return bul
// 	} else if (operation === "+") {
// 		const qush = qushish(a, b)
// 		return qush
// 	}else if (operation === "-") {
// 		const ayir = ayrish(a, b)
// 		return ayir
// 	}
// }
// console.log(calculate(20,15,"+"))
// const role = prompt("Rolingizni kiriting")
// const password = prompt("Parolingizni kiriting")
// let map
// const salomlash = () => {
// 	alert(`Xush kelibsiz ${role}`)
// }
// const err = () => {
// 	alert("Login yoki parol xato")
// }
// const login = (role, password) => {
// 	if (role === "admin" && password === "admin123") {
// 		salomlash()
// 		map = '../admin.html'
// 		return true
// 	} else if (role === "user" && password === "user123") {
// 		salomlash()
// 		map = '../user.html'
// 		return true
// 	}
// }

// const auth = (role, password) => {
// 	if (login(role, password)) {
// 		window.location.href = map
// 	} else {
// 		err()
// 	}
// }
// auth(role, password)