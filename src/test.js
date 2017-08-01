import imagePath from './assets/200x200.jpg';
import './assets/styles/index.scss';

const img = document.createElement('img');
img.src = imagePath;

// Some comments
console.log('test');
console.log(process.env.NODE_ENV);
document.body.appendChild(img);