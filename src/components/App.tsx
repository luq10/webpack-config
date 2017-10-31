import * as React from 'react';
import * as config from 'appConfig';

const image = require('../assets/200x200.jpg');

class App extends React.Component {
  public componentDidMount() {
    alert(JSON.stringify(config));
  }

  public render() {
    return <div>
      Hello world!
      <img src={image} alt="200x200"/>
    </div>;
  }
}

export default App;
