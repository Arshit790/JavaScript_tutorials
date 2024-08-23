// Array 


const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0])

// methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// !myArr.unshift(9)
// !myArr.shift() // it removes the value of unshift oprations

const newArray = myArr.join()
// console.log(typeof newArray)

// console.log(myArr)



// ! slice and splice 

console.log("A ",myArr)

const myn1  = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2  = myArr.splice(1,3)
console.log("C ",myArr)

console.log(myn2)