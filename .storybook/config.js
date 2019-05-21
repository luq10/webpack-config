import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  const req = require.context('../stories', true, /.jsx$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);
configure(loadStories, module);
