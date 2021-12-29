document.querySelector("#fnaarh").addEventListener("click", function () {
  let celsius = prompt("Hoeveel graden wil je omzetten?");
  let fnaarhber = (celsius * 9) / 5 + 32;
  alert(` ${celsius} Celsius is ${fnaarhber} farhenheit`);
});
