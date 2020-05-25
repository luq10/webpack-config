import { hot } from "react-hot-loader/root";
import React from "react";

import Component from "./Component";
import HookComponent from "./HookComponent";

const App: React.FC<{}> = () => {
  return (
    <div>
      <Component />
      <HookComponent />
    </div>
  );
};

export default hot(App);
