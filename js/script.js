let users=[];//foydalanuvchilar ro'yxati uchun massiv

const addUser=(user)=>{
	//user bor yoki yuqligini bilishimiz shart
	const existing_user=users.find((req)=>req.email===user.email);
	if(existing_user){
		console.log(`Bu ${user.email} allaqachon ro'yxatdan o'tgan`);
		return;
	}
	users.push(user);
	console.log(`${user.name} ro'yxatga muvaffaqiyatli qo'shildi`);
}
addUser({name:"Asror",lastName:"Shohzodov",email:"asrorshohzodov"});
addUser({name:"Asror",lastName:"Shohzodov",email:"asrorshohzodovv"});
const deleteUser=(email)=>{
	const userIndex=users.findIndex(req=>req.email===email);
	if(userIndex!==-1){
		const deletedUser=users.splice(userIndex,1);
		console.log(`${deletedUser[0].name} ro'yxatdan muvaffaqiyatli o'chirildi`);
	}
	else{
		console.log(`Bu ${email} email bilan foydalanuvchi ro'yxatdan topilmadi`);
	}
}

const updateUser=(email, newData)=>{
  const user = users.find((u) => u.email === email);
  if (user) {
    Object.assign(user, newData); // Foydalanuvchi ma'lumotlarini yangilash
    console.log(`Foydalanuvchi ${email} muvaffaqiyatli yangilandi.`);
  } else {
    console.log(`Foydalanuvchi ${email} email bilan topilmadi.`);
  }
}

updateUser('asrorshohzodov', { name: 'Asror', lastName: 'Shohzodov' });