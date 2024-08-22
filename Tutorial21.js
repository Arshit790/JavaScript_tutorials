// Control Flow

// +++++++++++++++++++ if ++++++++++++++++++++++++++++++++++++++
const isUserLoggedIn = true;
const temp = 41;

// if (temp === 41) {
//   console.log("Executed Sucessfully - less than 50")
// }else{
// console.log("Greater than 50")}

// console.log("Outside")

// ? < , > , >= , <= , == , === (check dataType as well as value)

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power ${power}`);
// }
// console.log(`User Power ${power}`); // not in if scope

const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500")
// }else if (balance < 750) {
//   console.log("less than 750")
// } else {
//   console.log("Test")
// }
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  // console.log("allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  // console.log("user logged in")
}

// +++++++++++++++++ Switch +++++++++++++++++++

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const month = "mar";

// switch (month) {
//   case "jan":
//     console.log("Jan");
//     break;
//   case "feb":
//     console.log("Feb");
//     break;
//   case "mar":
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;
//   default:
//     console.log("Default Case");
//     break;
// }


// +++++++++++++++ Truthy and Falsy Values +++++++++++++++++++++++++++

const userEmail = []

// if (userEmail) {
//   console.log("Got User Email")
// }
// else{
//   console.log("Don't have user email")
// }


//! Falsy Values :- false, 0, "", -0, BigInt - 0n, null, undefined, NaN

//! Truthy Values :-  true, 1, "abc", " ", [], {}, function(){}


// if(userEmail.length === 0){
//   console.log("Array is empty")
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  // console.log("empty")
}


// !false == 0 --> True
// !false == '' --> True
// !0 == '' --> True

// +++++++++++++++ Nullish Coalescing Operator(??) +++++++++++++++++++++

// ? works on null, undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

console.log(val1)

// +++++++++++++++++ Ternary Operator +++++++++++++++++++

// condition ? true : false 

const icePrice = 100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80")
