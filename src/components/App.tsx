import { hot } from 'react-hot-loader/root';
import React from 'react';
import appConfig from 'appConfig';

import HookComponent from './HookComponent';

import img from '../assets/images/200x200.jpg';
import './App.scss';

interface State {
  data: string;
}

class App extends React.Component<{}, State> {
  state = {
    data: '',
  };

  async componentDidMount() {
    const data = await this.foo();

    this.setState({data});
  }

  async foo(): Promise<string> {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(appConfig.APP_URL), 1000);
    });
  }

  render() {
    const {data} = this.state;

    return (
      <div className="app">
        <h1>Hello world</h1>
        <HookComponent/>
        <h3>{data}</h3>

        <img src={img} alt="Example"/>
      </div>
    );
  }
}

export default hot(App);
