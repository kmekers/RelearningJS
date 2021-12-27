const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];
// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
const ps = document.querySelectorAll("p");

ps.forEach(function (p) {
  p.textContent = "******";
  // console.log(p.textContent)
  // p.remove()
});

const newParagraph = document.createElement("p");
newParagraph.textContent = "this is a new element from Javascript";
document.querySelector("body").appendChild(newParagraph);
