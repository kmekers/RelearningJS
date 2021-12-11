const name = "endrew mead";

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

let password = "abssnbsdjik";

let testPw = function (password) {
  return password.length > 8 && !password.includes("password");
};

console.log(testPw("kankepatestpassword"));
