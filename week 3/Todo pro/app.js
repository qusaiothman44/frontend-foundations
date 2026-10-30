//Selectors

const addButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".list");
const todoInput = document.querySelector(".todo-input");
// event listener
document.addEventListener("DOMContentLoaded", getTodos);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click",TodoBtn)
// functions

function addTodo(event) {
  event.preventDefault();
saveTodos(todoInput.value)
  //build todo item
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo-div");
  newDiv.innerHTML = `
  <li class="todo-item"> ${todoInput.value}</li>
  <button class="complete-btn"> <i class="fas fa-check"></i></button>
    <button class="trash-btn"> <i class="fas fa-trash"></i></button>
    <button class="edit-btn"> <i class="fas fa-edit"></i></button>

  `;
  todoList.appendChild(newDiv);
  todoInput.value="";
}

function TodoBtn(event){
  event.preventDefault();
const item = event.target;
if (item.classList[0] === "complete-btn") {
  const todo = item.parentElement;
  todo.classList.toggle("completed")
}

if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo)
todo.remove();
}
if (item.classList[0] === "edit-btn") {
    const todo = item.parentElement;
        const oldText= todo.querySelector(".todo-item").textContent.trim();

todo.innerHTML=`<input type="text" class="edit-input">
<button class="save-btn"><i class="fas fa-save"></i></button>`

const input =todo.querySelector(".edit-input");
input.value= oldText;
input.focus();
}

if (item.classList[0] === "save-btn") {
      const todo = item.parentElement;

const input =todo.querySelector(".edit-input");
const newText= input.value.trim();

if(newText === "") return;

todo.innerHTML=` <li class="todo-item"> ${newText}</li>
  <button class="complete-btn"> <i class="fas fa-check"></i></button>
    <button class="trash-btn"> <i class="fas fa-trash"></i></button>
    <button class="edit-btn"> <i class="fas fa-edit"></i></button>`
}}


function saveTodos(e){
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos=[]
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(e);
  localStorage.setItem("todos",JSON.stringify(todos))
}

function getTodos(e){
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos=[]
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(element => {
     const newDiv = document.createElement("div");
  newDiv.classList.add("todo-div");
  newDiv.innerHTML = `
  <li class="todo-item"> ${element}</li>
  <button class="complete-btn"> <i class="fas fa-check"></i></button>
    <button class="trash-btn"> <i class="fas fa-trash"></i></button>
    <button class="edit-btn"> <i class="fas fa-edit"></i></button>

  `;
  todoList.appendChild(newDiv);
  });
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}