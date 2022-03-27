import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    variant?:'primary'|'secondary'|'default'|'danger'
    children?:ReactNode
    size?:'default'|'small'|'large'|'full'|'wide'
}

const Button = styled.button`
border-radius: 5px;
border: none;
background-color: ${({ variant }:ButtonProps) => {
    switch (variant) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'danger':
        return colors.danger;
      default:
        return colors.primary;
    }
  }};
  color: ${colors.text_primary};
  padding: ${({ size }:ButtonProps) => {
    switch (size) {
      case 'full':
        return '12px 16px';
      case 'large':
        return '12px 18px';
      case 'small':
        return '6px 12px';
      default:
        return '8px 12px';
    }
  }};
`;

export default Button;
