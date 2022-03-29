import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  type: 'justify-center' | 'align-center' | 'reverse' | 'start' | 'center'|'space-around'|'space-between';
}

const getFlexStyles = ({ type }:FlexProps) => {
  switch (type) {
    case 'justify-center':
    case 'space-around':
      return 'space-around';
    case 'space-between':
      return 'space-between';
    case 'align-center':
      return 'center';
    case 'reverse':
      return 'row-reverse';
    case 'start':
      return 'flex-start';
    default:
      return 'flex-start';
  }
};

const getAlignStyles = ({ type }:FlexProps) => {
  switch (type) {
    case 'align-center':
      return 'center';
    default:
      return '';
  }
};

const Flex: React.FC<FlexProps> = styled.div`
  display: flex;
  justify-content: ${getFlexStyles};
  align-items: ${getAlignStyles};
`;

export default Flex;
