const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USER = 'username';

const link = document.querySelector('a');

function bC(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USER, username);
  pG(username);
}

function pG(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const sU = localStorage.getItem(USER);

if (sU === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', bC);
} else {
  pG(sU);
}
