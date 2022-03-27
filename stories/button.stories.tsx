import React from 'react';
import Button from '../src/components/button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export function withDefault(props:any) {
  return <Button {...props}>Hello World</Button>;
}
