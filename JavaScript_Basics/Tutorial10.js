// ? Tutorial 10
// Date and Time


let myDate = new Date()
// console.log(myDate.toString())
// // console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())



// let myCreatedDate = new Date(2023 ,0 ,23)
// let myCreatedDate = new Date(2023 ,0 ,23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// ! convert to seconds
console.log(Math.floor(Date.now() / 1000))


let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)

console.log(newDate.toLocaleString('default', {
  weekday : "long",
}))