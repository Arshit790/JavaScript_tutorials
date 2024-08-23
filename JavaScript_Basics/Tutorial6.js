//  ? Tutorial 6
//How we put data into memory and want to access it 
//! Primitive and non-primitive


// 7types of Primitive(Call by value) : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false

//  Non - Primitive (Call by reference) : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
  name : "arshit",
  age : 22
}

const myFunction = function(){
console.log("Hello!");
}

console.log(typeof myFunction)
