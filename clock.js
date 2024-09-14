const clock = document.querySelector('#clock');

function sayHello() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${sec}`;
}

sayHello();
setInterval(sayHello, 1000);
