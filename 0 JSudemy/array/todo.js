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

let deleteTodo = function (todos, todotext) {
  let i = todos.findIndex(function (dontknowwhythisworks) {
    return dontknowwhythisworks.text.toLowerCase() === todotext.toLowerCase();
  });
  if (i > -1) {
    todos.splice(i, 1);
  }
};

deleteTodo(todos, "buy food");
console.log(todos);
