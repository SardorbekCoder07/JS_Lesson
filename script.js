'use strict'
// Default login ma'lumotlari
let email = 'sardorbekcoderjon@gmail.com'
let password = 'root1234'

const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const authBtn = document.querySelector('#authButton')
const menu = document.getElementById('menu')

// Login holatini boshqarish
let isLoggedIn = false

// Auth Button bosilganda
authBtn.addEventListener('click', () => {
	// Email va parolni tekshirish
	if (email === emailInput.value && password === passwordInput.value) {
		isLoggedIn = true
		alert('Login Successful!')
		// Login muvaffaqiyatli bo'lsa index.html sahifasiga o'tish
		window.location.href = './index.html'
		sessionStorage.setItem('ssss', 'true') // Login holatini saqlash
	} else {
		alert('You are not logged in')
	}
})

// Sahifani qayta yuklaganda Log Out tugmasini yaratish
const checkLogin = () => {
	const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true' // Sessiyani tekshirish

	if (isLoggedIn) {
		// Log Out tugmasini yaratish
		const logoutBtn = document.createElement('button')
		logoutBtn.textContent = 'Log Out'
		logoutBtn.style.marginLeft = '10px'
		menu.appendChild(logoutBtn)

		// Log Out bosilganda
		logoutBtn.addEventListener('click', () => {
			sessionStorage.removeItem('isLoggedIn') // Sessiyani tozalash
			window.location.href = './auth.html' // Login sahifasiga qaytish
		})
	}
}

// Sahifani yuklaganda loginni tekshirish
checkLogin()
