// let myName = "lucky     "
// let myChannel = "chai      "

// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};

Object.prototype.lucky = function () {
  console.log(`Lucky is present in all objects`);
};

Array.prototype.heyLucky = function () {
  console.log(`Hello Lucky`);
};

// heroPower.lucky();
// myHeros.lucky();

// myHeros.heyLucky();
// heroPower.heyLucky()  because we can access from parents not from child to parent

// ! Inheritance

const User = {
  name: "Lukcy",
  email: "abc@g.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

// modern syntax of Inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "lucky      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"luck".trueLength()
"iceTea".trueLength()