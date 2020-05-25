import React from "react";
import { Button } from "@storybook/react/demo";

export default {
  component: Button,
  title: "UI/Button",
};

export const Default = (): React.ReactNode => <Button>Hello Button</Button>;
export const WithEmoji = (): React.ReactNode => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
