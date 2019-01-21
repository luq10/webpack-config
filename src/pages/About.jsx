import React from 'react';

import json from '../assets/test-fixed.json';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <code>{JSON.stringify(json[0])}</code>
      </div>
    );
  }
}

export default About;

