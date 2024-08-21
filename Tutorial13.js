// Objects

//! Sinleton Objects (When constructor is made)

//Object Literals (To declare objects)
Object.create; // Used to make singleton obj

const mySym = Symbol("key1"); // ! using of symbol (interview question of printing symbol as a key)

const jsUser = {
  name: "Arshit",
  "full name": "Arshit Dixit", // cant be accesed by . folowed by obj name
  age: 18,
  [mySym]: "mykey1", // now it become symbol
  location: "Mathura",
  email: "xyz@google.com",
  isLOggedIn: false,
  lastLoggedinDays: ["Monday", "Saturday"],
};
// console.log(jsUser.name) // not a better way

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); // used for symbol for accessing symbol

jsUser.email = "user@#user.com";
// console.log(jsUser["email"]);

// Object.freeze(jsUser) // now no one can change the values

jsUser.email = "luck@lucky.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js user !");
};


jsUser.greeting2 = function () {
  console.log(`Hello Js user,${this.name}`);
};


console.log(jsUser.greeting2());
