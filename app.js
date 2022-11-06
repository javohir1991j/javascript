const users = {
  1: {
    userNumber: "1",
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    country: "USA",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
    name2: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
   }
  },
  2: {
    userNumber: "2",
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    country: "London",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name2: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
}

function parsUsers(obj) {
  let { userNumber, name, email, address: { street, suite, city, zipcode }, country, phone, website, company: { name2, catchPhrase, bs } } = obj
  year = new Date().getFullYear(),
    userNumber = `${userNumber}:chi foydalanuvchi haqida ma'lumotlar\n `
  username = `Foydalanuvchining ismi:${name}\n`
  userEmail = `Foydalanuvchining elektron pochtasi:${email}\n`,
    userAddress = `Manzil:\nKo'chasi:${street}\nMahallasi:${suite}\nShahari:${city}\nPochta indeksi:${zipcode}\n`,
    userGeo = `Geo manzili:\nMamlakati:${country}\n`,
    userPhone = `telefon raqami:${phone}\n`,
    userWebCity = `Web sayti:${website}\n`,
    userCompany = `Kompaniya:\nKompaniya nomi:${name2}\nCatchPhrase:${catchPhrase}\nBs:${bs}\n`,
    userInfo = `${userNumber}${username}${userEmail}${userAddress}${userPhone}${userWebCity}${userCompany}`
  return userInfo
}
for (const key in users) {
  console.log(parsUsers(users[key]))

}

