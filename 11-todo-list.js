const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]; // Get every index in the todoList.
    //const { name } = todoObject;
    //const {dueDate} = todoObject;
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    ">Delete</button>
    
    `; //Put the list  in an HTML code.
    todoListHTML += html;
  }

  //For each todo, we created a HTML code. Now we gonna combined this HTML code together and put it on the webpage using Accumultor pattern.

  document.querySelector(".Js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  let inputElement = document.querySelector(".Js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".Js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
    //name
    //duedate
  });
  inputElement.value = "";
  renderTodoList();
}

function Enter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
