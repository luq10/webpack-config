import imagePath from './assets/200x200.jpg';
import './assets/styles/index.scss';

const img = document.createElement('img');
img.src = imagePath;

let i = 0;

const button = document.createElement('button');
button.innerText = 'click';
button.addEventListener('click', function () {
  const span = document.createElement('span');
  span.innerText = ++i;

  document.body.appendChild(span);
});

document.body.appendChild(button);

// Some comments
console.log('test');
console.log(process.env.NODE_ENV);
document.body.appendChild(img);
