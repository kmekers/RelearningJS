const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean kitchen",
    completed: true,
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
const filters = { searchText: "" };

const renderdTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText);
  });
};

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach(function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});

document.querySelector("#add-todo").addEventListener("click", function () {
  console.log("todo added");
});
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderdTodos(todos, filters);
});

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)
