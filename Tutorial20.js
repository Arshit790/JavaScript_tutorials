// IIFE immediately invoked function expressions

(function chai() {
  // * Named IIFE
  console.log(`DB Connected`);
})();

// ! To overcome the problem of global scope pollution -- IIFE

// ! Below function giving error because of not telling the context stoppage , to remove this use ";"

((name) => {
  // * Unnamed IIFE
  console.log(`DB Connected Two ${name}`);
})("lucky");

// function(num1,num2) = (name) --> Both are similar

// chai(2,4) just like above done here in IIFE
