import React from 'react';
import Text from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'medium', 'large', 'extralarge', 'special'],
      },
    },
    bold: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const withDefault = (args:any) => <Text {...args}>Hello World this is Shivaraj Bakale</Text>;
