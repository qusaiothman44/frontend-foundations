//Selectors

const addButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".list");
const todoInput = document.querySelector(".todo-input");

// event listener

addButton.addEventListener("click", addTodo);

// functions

function addTodo(event) {
  event.preventDefault();

  //build todo item
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo-div");
  newDiv.innerHTML = `
  <li class="todo-item"> ${todoInput.value}</li>
  <button class="complete-btn"> <i class="fas fa-check"></i></button>
    <button class="trash-btn"> <i class="fas fa-trash"></i></button>

  `;
  todoList.appendChild(newDiv);
  todoInput.value="";
}
