let user = []//local baza bu yerda malumotlar vaqtinchalik saqlanadi!

const addUser = (user_data) => {
	const exist_user = user.find((req) => req.email === user_data.email)
	if (exist_user) {
		console.log(`Bu ${user_data.email} allaqachon ro'yxatdan o'tilgan `)
		return
	}
	user.push(user_data)
	console.log(`${user_data.name} ${user_data.lastName} muvaffaqqiyatli qushildi`)
}

const deleteUser = (email) => {
	const delete_user = user.findIndex((req) => req.email === email)
	if (delete_user !== -1) {
		const deleted_user = user.splice(delete_user, 1)[0]
		console.log(`${deleted_user.name} ${deleted_user.lastName} muvaffaqqiyatli o'chirildi`)
	}else{
		console.log(`Bu ${email} topilmadi!`);
	}
}

const updateUser = (email, newData) => {
	const update_user = user.find((req) => req.email === email)
	console.log(update_user);
	
	if(update_user){
		Object.assign(update_user, newData)
		console.log(`${update_user.name} ${update_user.lastName} muvaffaqqiyatli o'zgartirildi`)
	}else{
		console.log(`Bu ${email} topilmadi!`);
	}
}
const listUser=()=>{
	console.table(user)
}

addUser({ name: 'ali', lastName: 'aliyev', email: 'ali@.com' })
addUser({ name: 'vali', lastName: 'valiev', email: 'vali@.com' })
addUser({ name: 'vali', lastName: 'valiev', email: 'vali@.com' })
updateUser('vali@.com',{
	name:"Valijon",
	lastName:"Valijonov",
	email:"valijon@gmail.com"
})
listUser()