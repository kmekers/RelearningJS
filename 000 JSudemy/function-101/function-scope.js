let convertFahrenheitToCelsius = function (fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;

  if (result <= 0) {
    let isFreezing = true;
  }
  return result;
};
let celsius = convertFahrenheitToCelsius(150);

console.log(celsius);

