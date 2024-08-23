// ? Tutorial 16
// Functions and Parameters

function sayName() {
  console.log("Hello");
}
// sayName()

function add(n1, n2) {
  // parameters
  console.log(n1 + n2);
  return n1 + n2;
}

const res = add(4, 3); // arguements
// console.log("result is ",res)

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please provide a username");
    return;
  }
  return `${username} just logged in!`;
}
// console.log(loginUserMessage("lucy"))
console.log(loginUserMessage()); // ! when no values is passes as an arguements in funcion then result will be undefined
