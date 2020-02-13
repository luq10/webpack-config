import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('UI|Button', module)
  .add('with text', () => (
    <span>Hello Button 123</span>
  ))
  .add('with some emoji', () => (
    <button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
  ));
