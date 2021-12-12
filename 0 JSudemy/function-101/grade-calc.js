// student score, total possible score
// 15/20 => you got C  (75%)!

let scoreBerekening = function (studentScore, totalPossiblescore) {
  let percent = (studentScore * 100) / totalPossiblescore;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent <= 80) {
    letterGrade = "B";
  } else if (percent <= 70) {
    letterGrade = "C";
  } else if (percent <= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return ` Je hebt ${percent} % wat resulteerde in een ${letterGrade} `;
};

let result = scoreBerekening(70, 100);
console.log(result);
