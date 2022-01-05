// constructor function can be used to create objects
function User(username, email) {
  this.username = username;
  this.email = email;

  /* NOT the best way because it's stored directly on the object; should use the prototype
  this.login = function () {
    console.log(`${this.username} is logged in`);
  };
  */
}

User.prototype.login = function () {
  console.log(`${this.username} is logged in`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} is logged out`);
  return this;
};

function Admin(username, email, title) {
  // .call() calls the parent's constructor; works like super()
  User.call(this, username, email);
  this.title = title;
}

// copy parent's prototype
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (name) {
  pass;
};

const userOne = new User("shanks", "shanks@email.com");
const userTwo = new User("buggy", "buggy@email.com");
console.log(userOne);
userTwo.login().logout();

const AdminOne = new Admin("billy", "billy@email.com", "super admin");
console.log(AdminOne);
