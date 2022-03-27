import React, { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { FieldContext, MessageType } from '..';
import colors from '../../../utils/theme';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant?: MessageType;
}

const getBorderStyles = ({ variant }: InputProps) => {
  switch (variant) {
    case 'success':
      return `1px solid ${colors.primary}`;
    case 'error':
      return `1px solid ${colors.danger}`;
    default:
      return '1px solid #797779';
  }
};

const FieldBase: React.FC<InputProps> = styled.input`
  padding: 12px 12px;
  font-size: 15px;
  border: ${getBorderStyles};
  border-radius: 5px;
  background-color: ${colors.ternary};
  width: -webkit-fill-available;
  color: white;
  &::placeholder {
    color: #959195;
  }
  &:focus {
    outline: none;
  }
`;

const Input: React.FC<InputProps> = (props) => {
  const { type } = useContext(FieldContext);
  return <FieldBase {...props} variant={type} />;
};

export default Input;
