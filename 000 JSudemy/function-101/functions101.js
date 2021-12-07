let convertFahrenheitToCelsius = function (num) {
  let result = ((num - 32) * 5) / 9;
  return result;
};
let celsius = convertFahrenheitToCelsius(32);

console.log(celsius);
