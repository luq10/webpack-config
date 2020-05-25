import React from "react";

import img from "../assets/images/logo.png";
import "./Component.scss";

class Component extends React.Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const data = await this.foo();

    this.setState({ data });
  }

  async foo() {
    return await new Promise((resolve) => {
      setTimeout(() => resolve("some async data"), 1000);
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <h1>Hello webpack-config</h1>
        <h3>{data}</h3>

        <img src={img} alt="Example" />
      </div>
    );
  }
}

export default Component;
