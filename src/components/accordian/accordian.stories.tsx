import React from 'react';
import Accordian from '.';
import Text from '../text';

export default {
  title: 'Atoms/Accordian',
  component: Accordian,
};

export const withDefault = (args:any) => (
  <Accordian {...args} description={"Hello World this is Shivaraj Bakale and this is the first time we're loading up this component"}>
    <Text>Hello World this is Shivaraj</Text>
  </Accordian>
);
