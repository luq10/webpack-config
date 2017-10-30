import * as React from 'react';

const image = require('../assets/200x200.jpg');

class App extends React.Component {
    render() {
        return <div>
            Hello world!
            <img src={image} alt="200x200" />
        </div>;
    }
}

export default App;
