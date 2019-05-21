import React, { useState } from 'react';

const HookComponent = () => {
  const [value, setValue] = useState(true);

  return (
    <button onClick={() => setValue((val) => !val)}>
      { value ? 'On' : 'Off' }
    </button>
  );
};

export default HookComponent;
