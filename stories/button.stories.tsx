import React, { useEffect } from 'react';
import Button from '../src/components/button';
import useDevice from '../src/utils/hooks/useDevice';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'default', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['full', 'large', 'small', 'default', 'wide'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export function withDefault(props:any) {
  const { getDevice } = useDevice();
  const device = getDevice();

  useEffect(() => {
    console.log(device);
  }, [getDevice]);
  return <Button {...props}>Hello World</Button>;
}
