let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}

// Challenge area

let temp = 76;

if (temp <= 0) {
  console.log("it is freezing outside");
} else if (temp >= 75) {
  console.log("ik denk dat het warm is");
} else {
  console.log("tis cava");
}
