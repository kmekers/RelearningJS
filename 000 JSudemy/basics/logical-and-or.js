let temp = 55;

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice out");
} else if (temp <= 0 || temp >= 120) {
  console.log("do not go outside");
} else {
  console.log("eh do what you want");
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only give vegan menu");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("at least one vegan?");
} else {
  console.log("geen speciale mensen");
}
