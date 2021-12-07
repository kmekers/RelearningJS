let convertFahrenheitToCelsius = function (fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;
  return result;
};
let celsius = convertFahrenheitToCelsius(150);

console.log(celsius);
