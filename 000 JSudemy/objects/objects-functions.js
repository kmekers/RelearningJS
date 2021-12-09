let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};
let otherBook = {
  title: "A peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};
let firstbook = getSummary(myBook);

let otherBook2 = getSummary(otherBook);

console.log(firstbook.pageCountSummary);

let getFar = function (temp) {
  return {
    fahrenheit: temp,
    celsius:   (temp -32 )* 5 / 9,
    kelvin: ((temp - 32) * 5) / 9 + 273.15,
  };
};

let test = getFar(74);

console.log(test);

/* 
celsius: 
kelvin: (-32 * 5) / 9 + 273.15, */
