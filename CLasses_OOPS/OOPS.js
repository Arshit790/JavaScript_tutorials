const user = {
  username: "lucky",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    // console.log(`Username : ${this.username}`)
    // console.log(this);
  },
};
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// ! new => allows to create multiple instances from single object literal and also uses for creating new executional context

// ? new is also known as "Constructor Function"

function User(username, loginCount, isLoggedIn) {
  this.username = username; // LHS = Variable , RHS = Passing Parameter

  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log(`Welocome ${this.username}`);
  };
  return this;
}

const userOne = new User("Lucky", 12, true);
const userTwo = new User("Arshit", 11, false);
console.log(userOne.constructor);

console.log(userOne instanceof User);
// console.log(userTwo);

// ! new keyword working:
// - Empty Object created called "Instance"
// - Constructor function calls due to new
// - Arguements in the function injects in this keyword

// ! Constructor = tells about the refernce of self

//! Javascipt shows prototypical behavior (ie. when it doent find anything then it searches to upper layer and goes on and on......until gets null value)
