// ? Tutorial 19
// this and arrow functions
const user = {
  username: "Lucky",
  price: "999",
  welcomeMessage: function () {
    console.log(`Welcome ${this.username} to website`);
    // console.log(this)
  },
};

// ! this keyword is used to access current context [किसके बारे में बात हो रही है] (values)

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); //! refer to empty object because there is no global context

// ! Inisde Browser Global Object = Window

// function chai() {
//   let username = "Lucky";
//   console.log(this.username); // ! not works here(this works on object only)
// } // ? O/P => Undefined
// chai();



// const chai = function(num){
//   let username = "Lucky";
//    console.log(this.username);
// }   //![Same not works here]  
// ? O/P => Undefined
// chai()



const chai = () =>  {
  let username = "Lucky";
  console.log(this.username); // not works here(this works on object only)
}
// chai();


// ?const addTwo = (num1,num2) => {
// ?  return num1 + num2      [Normal Arrow Function]
// }

//  const addTwo = (num1,num2) => num1 + num2      //[Implicit Return Arrow Function]
const addTwo = (num1,num2) => (num1 + num2)      //[Implicit Return Arrow Function]


console.log(addTwo(3,4))


const myArr = [2,3,5,4,7,8]
// myArr.forEach()