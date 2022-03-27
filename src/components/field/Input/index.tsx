import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { FieldContext, MessageType } from '..';
import colors from '../../../utils/theme';

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    variant?:MessageType
}

const getBorderStyles = ({ variant }:InputProps) => {
  switch (variant) {
    case 'success':
      return `1px solid ${colors.primary}`;
    case 'error':
      return `1px solid ${colors.danger}`;
    default:
      return '1px solid #e8e8e8';
  }
};

const FieldBase:React.FC<InputProps> = styled.input`
padding: 6px 12px;
font-size: 15px;
border: ${getBorderStyles};
`;

const Input:React.FC<InputProps> = (props) => {
  const { type } = useContext(FieldContext);
  return <FieldBase {...props} variant={type} />;
};

export default Input;
