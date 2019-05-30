// For async/await
import '@babel/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

import './assets/styles/index.scss';

function renderReact(params) {
  // eslint-disable-next-line
  console.log('app params', params); // this params can be add as props to <App>...

  ReactDOM.render(
    <App/>,
    params.rootElement,
  );
}

if (process.env.IS_WIDGET) {
  window.lotto = {
    init: renderReact, // end user can define params, see index.widget.html
  };
}
else {
  renderReact({
    rootElement: document.getElementById('root') // read params from URL...
  });
}


