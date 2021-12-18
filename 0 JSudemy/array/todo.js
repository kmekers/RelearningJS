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
  let i = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todotext.toLowerCase();
  });
  if (i > -1) {
    todos.splice(i, 1);
  }
};

const getThingstoDo = function (todos) {
  return (todos.filter = todos.filter(function (todo) {
    const istrue = todo.completed === false;
    // shorthand = retun !todo.completed
    return istrue;
  }));
};

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed > b.completed) {
      return -1;
    } else if (b.completed < a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

//const isTrue = todos.completed.includes(true);

//return isTrue === true;

//console.log(getThingstoDo(todos));

//deleteTodo(todos, "buy food");
//console.log(todos);
