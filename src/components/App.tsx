import { hot } from 'react-hot-loader/root';
import React from 'react';
import appConfig from 'appConfig';

import HookComponent from './HookComponent';
import SegmentBox from './SegmentBox';

import img from '../assets/images/200x200.jpg';
import './App.scss';

interface State {
  data: string;
  disabled: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    data: '',
    disabled: true,
  };

  async componentDidMount(): Promise<void> {
    const data = await this.foo();

    this.setState({data});
  }

  async foo(): Promise<string> {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(appConfig.APP_URL), 1000);
    });
  }

  render(): JSX.Element {
    const {data} = this.state;

    return (
      <div className="app">
        <h1>Hello world</h1>
        <HookComponent/>

        <SegmentBox
          title="Title"
          disabled={this.state.disabled}
          onChangeControl={(): void => this.setState((state): object => ({ disabled: !state.disabled }))}
        >
          {
            (disabled): JSX.Element => disabled ? <span>...</span> : <span>Lorem</span>
          }
        </SegmentBox>

        <SegmentBox title="Some">
          {
            (disabled): JSX.Element => disabled ? <span>...</span> : <span>Lorem</span>
          }
        </SegmentBox>

        <h3>{data}</h3>

        <img src={img} alt="Example"/>
      </div>
    );
  }
}

export default hot(App);
