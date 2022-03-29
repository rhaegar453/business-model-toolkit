import React from 'react';
import Accordian from '.';
import Text from '../text';

export default {
  title: 'Atoms/Accordian',
  component: Accordian,
};

export const withDefault = (args:any) => (
  <Accordian {...args}>
    <Text>Hello World this is Shivaraj</Text>
  </Accordian>
);
