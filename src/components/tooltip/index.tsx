import React, { HTMLAttributes, ReactNode, useState } from 'react';
import Portal from '../Portal';
import Text from '../text';

export interface ToolTipProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  parentId?: string;
  isOpen?: boolean;
  handleClickAway?: () => void;
}

const ToolTip: React.FC<ToolTipProps> = ({
  isOpen = false,
  parentId,
  handleClickAway,
}) => (isOpen ? (
  <Portal
    elementId="react-portal-tooltip"
    parentId={parentId}
    handleClickAway={handleClickAway}
  >
    <div>
      <Text>Hello World this is the tooltip</Text>
    </div>
  </Portal>
) : null);

export default ToolTip;
