import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';
import { ButtonTypes } from '../button';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement>{
    children?:ReactNode
    type:ButtonTypes
}

const getBackgroundStyles = ({ type }:ChipProps) => {
  switch (type) {
    case 'danger':
      return colors.danger;
    case 'primary':
      return colors.primary;
    case 'secondary':
      return colors.secondary;
    default:
      return colors.primary;
  }
};

const Chip = styled.span`
padding: 6px 12px;
border-radius: 100px;
background-color: ${getBackgroundStyles};
font-size: 12px;
color: white;
margin: 5px;
cursor: default;
`;

export default Chip;
