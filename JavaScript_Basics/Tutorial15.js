// ? Tutorial 15
// objects destructuring 

const course = {
  coursename : "js in hindi",
  price : "999",
  courseInstructor : "lucky"
}
// course.corserInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);


//? +++++++++++++++++++++ API +++++++++++++++++++++++++++++++

// in json keys and valuees always in string
//  ! {
//  ! "coursename" : "js in hindi",
//  ! "price" : "free",
//  !"name" : "lucky"
//  ! }
 
// [
//   {},
//   {},
//   {}
// ]
