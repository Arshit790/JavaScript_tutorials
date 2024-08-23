// ? Tutorial 8
// Number and Maths

const name = "Arshit"
const counter = 50
// console.log(name + counter + " Value")


console.log(`Hello my namme is ${name} and repo count ${counter}`)

const gameName = new String('luckylp-lp-com')
console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.concat('.exe'))
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))


const newStr = gameName.substring(0,4)
console.log(newStr)

const anotherStr = gameName.slice(-8,4)
console.log(anotherStr)

const strNew = "    lucky   "
console.log(strNew)
console.log(strNew.trim())

const url = "https://arshit.com/arshit%20dixit"
console.log(url.replace('%20','-'))

console.log(gameName.split('-'))