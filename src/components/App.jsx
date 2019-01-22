import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Index = React.lazy(() => import(/* webpackChunkName: "page.index" */'../pages/Index'));
const About = React.lazy(() => import(/* webpackChunkName: "page.about" */'../pages/About'));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <React.Suspense fallback={<span>Loading...</span>}>
            {/*
              This using of React.lazy makes react-router proptypes fail
              See: https://github.com/ReactTraining/react-router/issues/6420

              Fix for that will be in the next version of react-router (4.4.0)
            */}
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
          </React.Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
