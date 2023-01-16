const User = require('./User')

const guest1 = new User(4, 9, 'Lawna', 23)
const guest2 = new User(2, 6)
const guest3 = new User(5, 20, 'Kyle', 47)

console.log("----Guest one----")
console.log(guest1.userInfo())
//
console.log(guest1.addNums())
console.log(guest1.subNums())
console.log(guest1.multiNum())
console.log(guest1.divNum())
//
console.log(guest1.dataType(guest1.turnNumberToString()))
//
//
console.log("----Guest two----")
console.log(guest2.userInfo())
//
console.log(guest2.addNums())
console.log(guest2.subNums())
console.log(guest2.multiNum())
console.log(guest2.divNum())
//
console.log(guest2.dataType(guest2.turnNumberToString()))
//
//
console.log("----Guest three----")
console.log(guest3.userInfo())
//
console.log(guest3.addNums())
console.log(guest3.subNums())
console.log(guest3.multiNum())
console.log(guest3.divNum())
//
console.log(guest3.dataType(guest3.turnNumberToString()))