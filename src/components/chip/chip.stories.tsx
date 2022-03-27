import React from 'react';
import Chip from '.';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    type: {
      type: 'select',
      options: ['danger', 'primary', 'secondary', 'ternary'],
    },
  },
};

export const withDefault = (args:any) => <Chip {...args}>Hello World</Chip>;
