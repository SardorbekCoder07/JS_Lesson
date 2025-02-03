const socket = io("http://localhost:3000")

const chatBox = document.getElementById("chat-box")
const messageInput = document.getElementById("message")

// Xabar yuborish
function sendMessage() {
	const message = messageInput.value
	if (message.trim()) {
		socket.emit("chat message", message)
		messageInput.value = ""
	}
}

// Enter bosilganda xabar yuborish
function handleEnter(event) {
	if (event.key === "Enter") {
		sendMessage()
	}
}

// Xabarni chatga qo‘shish
socket.on("chat message", (msg) => {
	const messageElement = document.createElement("p")
	messageElement.textContent = msg
	chatBox.appendChild(messageElement)

	// Chatni pastga scroll qilish
	chatBox.scrollTop = chatBox.scrollHeight
})
