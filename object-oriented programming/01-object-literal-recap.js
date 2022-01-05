const userOne = {
  username: "billy",
  email: "billy@email.com",

  login() {
    console.log("logged in");
    return this;
  },
  logout() {
    console.log("logged out");
    return this;
  },
};

console.log(userOne.username, userOne["email"]);
userOne.login().logout().login();
