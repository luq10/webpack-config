import React, { useState } from "react";

import styles from "./HookComponent.module.scss";

const HookComponent = () => {
  const [value, setValue] = useState(true);

  return (
    <button className={styles.button} onClick={() => setValue((val) => !val)}>
      <span className={styles.text}>{value ? "On" : "Off"}</span>
    </button>
  );
};

export default HookComponent;
