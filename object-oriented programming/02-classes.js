class User {
  constructor(username, email, age) {
    this.username = username;
    this.email = email;
    this.age = age;
  }

  login() {
    console.log(`${this.username} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} has logged out`);
    return this;
  }
}

const userOne = new User("billy", "billy@email.com", 32);
console.log(userOne);
userOne.login().logout().login();

const userTwo = new User("mikey", "mikey@email.com", 20);
console.log(userTwo);
userTwo.login().logout().login();

/*
the "new" keyword
    1. creates a new empty object
    2. binds the valus of "this" to the new object
    3. calls the constructor function to build the object
*/
