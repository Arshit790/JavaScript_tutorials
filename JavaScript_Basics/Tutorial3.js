//? Tutorial 3

let score1 = "33abc" // it becomes not a number (NaN)

console.log(typeof score1)
let valInNumber1 = Number(score1)
console.log(valInNumber1) // NaN
console.log(typeof valInNumber1)
console.log("--------------")

let score2 = null

let valInNumber2 = Number(score2)
console.log(valInNumber2)
console.log(typeof valInNumber2)
console.log("--------------")

let score3 = undefined

let valInNumber3 = Number(score3)
console.log(valInNumber3)
console.log(typeof valInNumber3)
console.log("--------------")

let score4 = true

let valInNumber4 = Number(score4)
console.log(valInNumber4)
console.log(typeof valInNumber4)


// "33" => 33
// "33abc" => NaN
// true => 1 false => 0

let isLogggedIn = 1
let booleanisLoggedIn = Boolean(isLogggedIn)
console.log(booleanisLoggedIn)

// 1 => true 0 => false
// "" => false 
// "abc" => true

let someNumber = 33
let stringNumber  = String(someNumber)
console.log(typeof stringNumber)