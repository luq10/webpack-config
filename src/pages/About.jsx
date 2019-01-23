import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as exampleActions from '../actions/creators/example';

class About extends React.Component {
  render() {
    const {getExampleData, getExample, example} = this.props;
    const {removeExampleData, removeExample} = this.props;

    return (
      <div>
        <h1>About</h1>

        <h3>Get action</h3>

        <code>{JSON.stringify(getExampleData)}</code>

        <h3>Remove action</h3>

        <code>{JSON.stringify(removeExampleData)}</code>

        <h3>Data</h3>

        <code>{JSON.stringify(example)}</code>

        <div>
          <button onClick={() => getExample(1)}>Get</button>
          <button onClick={() => removeExample('002')}>Remove id=002</button>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  getExampleData: PropTypes.object.isRequired,
  removeExampleData: PropTypes.object.isRequired,
  example: PropTypes.array,

  getExample: PropTypes.func.isRequired,
  removeExample: PropTypes.func.isRequired,
};

// @todo add selectors
export default connect(
  state => ({
    getExampleData: state.example.get,
    removeExampleData: state.example.remove,
    example: state.example.data,
  }),
  ({
    getExample: exampleActions.get,
    removeExample: exampleActions.remove,
  })
)(About);
