import { hot } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Hello world</h1>
      </Provider>
    );
  }
}

export default hot(module)(App);
