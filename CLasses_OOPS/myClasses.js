// // ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const lucy = new User("lucky", "chai@g.com", "1234");
// console.log(lucy.encryptPassword());
// console.log(lucy.changeUsername());

// Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("lucky", "tea@t.com", "1234456");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
