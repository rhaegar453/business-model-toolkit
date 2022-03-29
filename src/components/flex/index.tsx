import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'spaceAround' | 'center' | 'justifyCenter' | 'spaceBetween' ;
}

const getFlexStyles = ({ type }:FlexProps) => {
  switch (type) {
    case 'justifyCenter':
      return 'center';
    case 'spaceAround':
      return 'space-around';
    case 'spaceBetween':
      return 'space-between';
    case 'center':
      return 'center';
    default:
      return 'flex-start';
  }
};

const getAlignStyles = ({ type }:FlexProps) => {
  switch (type) {
    case 'center':
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
