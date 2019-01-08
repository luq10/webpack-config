import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

addDecorator(withInfo);

configure(loadStories, module);
