const images = ['0.jpg', '1.webp', '2.jpg'];

const cI = images[Math.floor(Math.random() * images.length)];

const bI = document.createElement('img');

bI.src = `img/${cI}`;

document.body.appendChild(bI);
