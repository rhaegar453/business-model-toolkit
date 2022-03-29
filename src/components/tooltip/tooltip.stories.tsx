import React, { useState } from 'react';
import ToolTip from '.';
import Button from '../button';

export default {
  title: 'Atoms/Tooltip',
  component: ToolTip,
};

export const withDefault = (args:any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button id="tooltip-button" onClick={() => setOpen(true)}>Click Me</Button>
      <ToolTip open {...args} isOpen={open} handleClickAway={() => setOpen(false)} parentId="tooltip-button" />
    </div>
  );
};
