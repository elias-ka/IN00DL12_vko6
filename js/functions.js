const input = document.querySelector("input");
const list = document.querySelector("table");
const sort = document.querySelector("span");

const todos = [];

const addRow = () => {
  const newTodo = input.value.trim();
  if (newTodo.length === 0) {
    return;
  }
  todos.push(newTodo);
  addTableRow(newTodo);
  input.value = "";
};

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addRow();
  }
});

const deleteRow = (todo) => {
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  list.deleteRow(index);
};

const addTableRow = (text) => {
  const row = list.insertRow();
  const col1 = row.insertCell(0);
  const col2 = row.insertCell(1);
  col1.innerHTML = text;
  col2.innerHTML = '<a href="#" onclick="deleteRow(\'' + text + "')\">X</a>";
};

sort.addEventListener("click", () => {
  todos.sort();
  while (list.rows.length > 0) {
    list.deleteRow(0);
  }
  todos.forEach((todo) => {
    addTableRow(todo);
  });
});
