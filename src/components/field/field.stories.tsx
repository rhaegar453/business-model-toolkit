import React from 'react';
import Field from '.';

export default {
  title: 'Molecules/Field',
  component: Field,
};

export const withDefault = (args:any) => (
  <Field {...args}>
    <Field.Input placeholder="Hello World" />
    <Field.Message>Please enter the name</Field.Message>
  </Field>
);
