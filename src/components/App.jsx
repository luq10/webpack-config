import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AsyncIndex from '../pages/AsyncIndex';
import AsyncAbout from '../pages/AsyncAbout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/about/">About</Link></li>
          </ul>

          <Route path="/" exact component={AsyncIndex} />
          <Route path="/about/" component={AsyncAbout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
