import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

storiesOf("UI|Button", module)
  .add("with text", () => <Button>Hello Button 123</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
