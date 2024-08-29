const promiseOne = new Promise(function(resolve,reject){
  // Do an async task
  // DB Calls, CryptoGraphy, network
  
  setTimeout(function(){
    console.log("async task is completed")
    resolve()
  },1000)
})


promiseOne.then(function(){  // Connection to resolve() directly
    console.log("Promise Consumed")
}) 



new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async Task 2")
    resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(
            {username : "Lucky", email : "one@two.com"}
        )
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// Method 1 = Using .then().catch() - for retrieving values

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "lucy", password :"123"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
})

// Method 2 = Using async await - for retrieving values

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javaScript", password :"123"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
try {
    const response = await promiseFive
    console.log(response)
} catch (error) {
    console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response)
//     const data = await response.json()
//     console.log(data)
// } catch (error) {
//     console.log("E : ",error)
// }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
console.log(error)
})