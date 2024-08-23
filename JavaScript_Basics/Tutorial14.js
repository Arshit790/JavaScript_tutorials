// ? Tutorial 14
// Objects

const tinder = new Object(); // Sinleton Object
const tinderUser = {}; // Non - Sinleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "user@user.com",
  fullname: {
    userfullname: {
      firstname: "Lucky",
      lastname: "Dixit",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4); // here {} -> Target Obj  and rest are source
// const obj3 = {...obj1,...obj2} // ! combine obj using spread operator

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "g@gmail.com",
  },
  {
    id: 3,
    email: "f@gmail.com",
  },
  {
    id: 4,
    email: "i@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
 