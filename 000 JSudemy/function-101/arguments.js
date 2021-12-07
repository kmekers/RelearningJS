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
  let tipPercent2 = total * tipPercent + total;
  return (
    "Total = " +
    total +
    " tip = " +
    total * tipPercent +
    " tip + totaal=   " +
    tipPercent2
  );
};
let test = getTip(500, 0.2);
console.log(test);
