// Strings in JS

// Stack Memory(Primitive - copy) and Heap Memory(Non-Primitive-  reference)


let myYT = "luckypanditdotcom"

let anotherYt = myYT
anotherYt = "arshitpanditdotcom"
console.log(anotherYt)
console.log(myYT)


let user1 = {
  email : "user@google.com",
  upi : "user@ybl"
}
let user2 = user1


user2.email = "xyz@google.com"
console.log(user1.email);
console.log(user2.email);
