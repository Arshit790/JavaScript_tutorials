class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  
  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }

  get password() {
    return `${this._password}hitesh`
  }
  set password(value) {
    this._password = value
  }
}

const lucky = new User("l@lucky.co", "abc123");
console.log(lucky.email);
