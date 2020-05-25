import React from "react";
import { Button } from "@storybook/react/demo";

export default {
  component: Button,
  title: "UI/Button",
};

export const Default = () => <Button>Hello Button</Button>;
export const WithEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
