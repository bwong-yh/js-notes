// subclasses = class inheritance
// subclassse extend from the parent class
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
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

const userOne = new User("robin", "robin@email.com");
const userTwo = new User("vivi", "vivi@email.com");
const userThree = new User("jinbe", "jinbe@email.com");

class Admin extends User {
  // if subclass has no constructor, it will use its parents

  constructor(username, email, title) {
    // super() looks and runs parent's constructor
    super(username, email);
    this.title = title;
  }

  deleteUser(name) {
    users = users.filter(user => user.name !== name);
  }
}

const adminOne = new Admin("billy", "billy@email.com", "super admin");

let users = [userOne, userTwo, userThree, adminOne];
console.log(users);

adminOne.deleteUser("vivi");
console.log(users);
