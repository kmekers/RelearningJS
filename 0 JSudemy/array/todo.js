let toDo = [
  "js leren",
  "css-grid leren",
  "positioning leren",
  "vh etc leren",
  "wordpress cursus doen",
];
console.log(`je hebt ${toDo.length} to do's`);

toDo.splice(2, 1);
console.log(toDo);
toDo.push("Iedere dag een beetje JS");
console.log(toDo);
toDo.shift();
console.log(toDo);
