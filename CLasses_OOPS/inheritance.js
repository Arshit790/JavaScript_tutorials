class User {
  constructor(username) {
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`)
  }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`)
    }
}

const user1 = new Teacher('lucky','chai@gmail.com','123')
user1.addCourse()


const user2 = new User('arshit')
user2.logMe()

user1.logMe()

console.log(user1 instanceof Teacher)