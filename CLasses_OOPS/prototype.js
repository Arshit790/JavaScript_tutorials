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

heroPower.lucky();
