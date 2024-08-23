// Scope Level
//var c = 300  // ! global scope

let a = 300;

if (true) {
  // ! block scope
  let a = 10;
  const b = 20;
  // console.log("Inside",a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Lucky";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);

  two();
}
// one()

if (true) {
  const userName = "Lucy";
  if (userName === "Lucy") {
    const website = " youtube";
    // console.log(userName + website);
  }
  // console.log(website)  - outside block
}

// console.log(userName) // Can't accessed

/// +++++++++++++++++++++++++ Intersting Example +++++++++++++++++++++

console.log(addone(5))
function addone(num){
  return num + 1
}

addTwo(5)  //! it throws error due to the function holds in a variable - "Hoisiting"

const addTwo = function(num){
  return num + 2
}
