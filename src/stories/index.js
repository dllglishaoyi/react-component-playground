import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ReactComponentPlayground from '../index';

storiesOf('ReactComponentPlayground', module)
  .add('default view', () => (
    <ReactComponentPlayground />
  ));
