const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: "*",
	},
})

// Foydalanuvchilarni kuzatish
io.on("connection", (socket) => {
	console.log(`Foydalanuvchi ulandi: ${socket.id}`)

	// Xabarni qabul qilish va barcha foydalanuvchilarga jo‘natish
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg)
	})

	// Foydalanuvchi chiqsa bildirish
	socket.on("disconnect", () => {
		console.log(`Foydalanuvchi chiqdi: ${socket.id}`)
		io.emit("chat message", "🔴 Foydalanuvchi chatdan chiqdi.")
	})
})

// Serverni ishga tushirish
server.listen(3000, () => {
	console.log("🚀 Server 3000-portda ishlayapti...")
})
