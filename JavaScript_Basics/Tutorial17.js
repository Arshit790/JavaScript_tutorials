// ? Tutorial 17

function calculateCartPrice(val1,val2,...num1){ //rest operator ...
  return num1
}

// console.log(calculateCartPrice(200,400,500,700))


 // ! ... rest == spread (Depends on usuability)

const user = {
  username : "Lucky",
  prices : "999"
}
function handleObject(anyobject){
  
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` )
}
// handleObject(user)
handleObject({
  username :"sam",
  price : "399"
})

const myAr = [200,400,100,600]

function returSecond(getArray){
  return getArray[2]
}
// console.log(returSecond(myAr))
console.log(returSecond([100,300,500,400]))