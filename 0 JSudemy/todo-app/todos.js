const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

const completeTodos = todos.filter(function (todo) {
  return !todo.completed;
});

const hoeveel = completeTodos.length;

todos.forEach(function (todo) {
  const printTodo = document.createElement("p");
  printTodo.textContent = todo.text;
  document.querySelector("body").appendChild(printTodo);
});

const zoveel = document.createElement("h1");
zoveel.textContent = `${hoeveel}`;
document.querySelector("body").appendChild(zoveel);

// you have 2 todos left (p element)
// add a p for each todo above

// eerst todos geraken, dan filteren op completed, index fixen en weergeven

/* const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (paragraph) {
  if (paragraph.textContent.includes("the")) {y
    paragraph.remove();
  }
});
 */
