import { hot } from 'react-hot-loader';
import React from 'react';

import img from '../assets/images/200x200.jpg';

class App extends React.Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const data = await this.foo();

    this.setState({data});
  }

  async foo() {
    return await new Promise((resolve) => {
      setTimeout(() => resolve('some async data'), 1000);
    });
  }

  render() {
    const {data} = this.state;

    return (
      <div>
        <h1>Hello world</h1>
        <h3>{data}</h3>

        <img src={img} alt="Example"/>
      </div>
    );
  }
}

export default hot(module)(App);
