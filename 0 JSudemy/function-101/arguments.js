let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " -Score: " + score;
};
let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// challenge area

let getTip = function (total, tipPercent) {
  let tip = total * tipPercent;
  let tipPercent2 = tip + total;
  return `Total = ${total} tip = ${tip} Total+ tip= ${tipPercent2}
  Het aantal percent tip u koos is ${
    tipPercent * 100
  } dit komt neer op ${tip} Euro`;
};
let test = getTip(60, 0.2);
console.log(test);
