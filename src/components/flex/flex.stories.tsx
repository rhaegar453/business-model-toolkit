import React from 'react';
import Flex from '.';

export default {
  title: 'Atoms/Flex',
  component: Flex,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['spaceAround', 'center', 'justifyCenter', 'spaceBetween'],
      },
    },
  },
};

export const withDefault = (args:any) => (
  <Flex {...args} style={{ color: 'white' }}>
    <span>Hello World</span>
    <span>Hello World2</span>
  </Flex>
);
