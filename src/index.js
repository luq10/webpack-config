import axios from 'axios';

import sum from './sum';
import appConfig from 'appConfig';
import './test';

console.log(sum(100, 2000));
console.log(appConfig);

// fetch('/api/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({foo: 1})
// })
//   .then(function(res) {
//     console.log(res);
//   });

axios.post('/api/login', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.post('/api/post', {
  foo: '1',
  bar: '2'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
