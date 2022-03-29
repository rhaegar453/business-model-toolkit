import React, { useState } from 'react';
import Portal from '../Portal';
import Text from '../text';

const ToolTip = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <Portal elementId="react-portal-tooltip">
      <div>
        <Text>Hello World this is the tooltip</Text>
      </div>
    </Portal>
  );
};

export default ToolTip;
