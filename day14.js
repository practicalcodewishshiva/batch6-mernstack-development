const loginDetials = {
  userName: "shiva",
  password: "12345",
};

// rules
const userObj = { ...loginDetials, userName: "Sruthi", password:"hello" };

console.log(loginDetials, "loginDetials");

console.log(userObj, "userObj");
