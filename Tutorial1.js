/*  LET, VAR AND CONST  */

const accountID = 234455;
let accountEmail = "xyz@gmail.com"; // resolve scope issues
var accountPassword = "12344";

/* Var keyword doesnt support block scope and functional scope*/

accountCity = "Mathura";
let accountState; // gives undefined value when its value not declared

/* const keyword doesnt change its value(it locked the variables)
 accountID = 2 (can't change its value - not allowed)
 */

console.log(accountID);

accountEmail = "sdf@g.com";
accountPassword = "23456";
accountCity = "BLR";

console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

