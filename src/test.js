import imagePath from './assets/200x200.jpg';
import './assets/styles/index.scss';

const img = document.createElement('img');
img.src = imagePath;

console.log('test');
document.body.appendChild(img);