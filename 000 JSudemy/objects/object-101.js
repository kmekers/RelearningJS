let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";
console.log(`${myBook.title} by ${myBook.author}`);

//

let person = {
  name: "Koen",
  age: 30,
  location: "Sint-Truiden",
};
console.log(` ${person.name} is  ${person.age} en woont in ${person.location}`);
console.log(
  ` ${person.name} is  ${person.age + 1} en woont in ${person.location}`
);

let convertFahrenheitToCelsius = function (fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;
  return result;
};
let celsius = convertFahrenheitToCelsius(150);

console.log(celsius);

// de waarde die u ingaf is zoveel fahrenheit, zoveel celsius en zoveel kelvin.
// berekenen in 1 functie => 

