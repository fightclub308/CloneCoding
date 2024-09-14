const toDoFrom = document.querySelector('#todo-form');
const toDoInput = toDoFrom.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
const toDos_KEY = 'todos';
let toDos = [];

function sT() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function bD(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  sT();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', bD);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function hS(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  sT();
}

function sayHello(item) {
  console.log('hello', item);
}

toDoFrom.addEventListener('submit', hS);
const gT = localStorage.getItem(toDos_KEY);
if (gT !== null) {
  const parsedtodos = JSON.parse(gT);
  toDos = parsedtodos;
  parsedtodos.forEach(paintTodo);
}
