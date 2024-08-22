// Loops

// ++++++++++++++++++++++ for ++++++++++++++++++


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
    //     console.log("5 is best")
    // }
    // console.log(element);
}



for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`)
    // for (let j = 0; j <= 10; j++) {
    //     console.log(`Outer Loop Value: ${j}`)
    }
}

let myArr = ["flash", "batman", "superman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
}

// ++++++++++++++ break and continue ++++++++++++++++++

for (let index = 1; index <= 20; index++) {
    if (index === 2 || index === 3 ) {
        continue
    }


    if (index === 5) {
        // console.log("Detected 5")
        break
    }
    // console.log(`value of ind is: ${index}`)
}

//+++++++++++++++++++ While and Do while ++++++++++++++++++++
let ind = 0
while (ind <= 10) {
    // console.log(`value of index is: ${ind}`)
    ind+=2
}

let myArr1 = ["flash","superman","batman"]
let ar = 0
while(ar < myArr1.length){
// console.log(`value is ${myArr[ar]}`)
ar+=1
}

let score = 11

do {
    // console.log(`Score is: ${score}`)
    score++
} while (score <= 10);



// ++++++++++++++++++ Higher Order Array Loops +++++++++++++++++++


// ? for of
// ["","",""]
// [{},{},{}]

const array  = [1,2,3,4,5]
for (const i of array) {
    // console.log(i)
}

const greet = "hello world"

for (const i of greet) {
    // console.log(`Each Char is ${i}`)
}

//++++++++++++++++++ maps +++++++++++++++++++++

const map = new Map() // possess unique values
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key, ":-" ,value)
}

const myObj = {
    game1  : "NFS",
    game2  : "Spiderman",
 }

//  for (const [key,value] of myObj) {
//     console.log(key, ":-" ,value)

//  }

// +++++++++++++++++++ for in(iterable in objects) ++++++++++++++

const myObject = {
    js : "javascript",
    cpp: "C++",
    py : "python",
    rb: "ruby"
};

for (const key in myObject) {
    // console.log(`${key} Shortcut is for ${myObject[key]}`);
}

const language = ["js","ruby","python","java","cpp"]
for (const key in language) {
// console.log(key,language[key])
}

//! for-in cant be used over maps


// ++++++++++++++++++++++ for each +++++++++++++++++

const coding = ["js","rb","py","java","cpp"]
// coding.forEach(function (item) { 
//     console.log(item)
// } )

// coding.forEach((item)=>{
//     console.log(item)
// })

// function print(item){
//     console.log(item)
// }

// coding.forEach(print)

// coding.forEach((item ,index,arr)=>{
// console.log(item,index,arr)
// })


const myCoding = [
    {
            languageName : "javascript",
            languageFile : "js"
    },
    {
            languageName : "java",
            languageFile : "java"
    },
    {
            languageName : "python",
            languageFile : "py"
    },
]

myCoding.forEach((item)=>{
console.log(item.languageName,item.languageFile)
})