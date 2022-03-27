import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'default' | 'danger';
  children?: ReactNode;
  size?: 'default' | 'small' | 'large' | 'full' | 'wide';
}

const getBackgroundStyled = ({ variant }: ButtonProps) => {
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
};
const getPadingStyles = ({ size }: ButtonProps) => {
  switch (size) {
    case 'full':
      return '12px 16px';
    case 'large':
      return '12px 22px';
    case 'small':
      return '6px 12px';
    default:
      return '8px 12px';
  }
};

const getWidthStyles = ({ size }: ButtonProps) => {
  switch (size) {
    case 'full':
      return '-webkit-fill-available';
    default:
      return '';
  }
};

const getFontStyles = ({ size }:ButtonProps) => {
  switch (size) {
    case 'large':
    case 'wide':
    case 'full':
      return '18px';
    default:
      return '14px';
  }
};

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: ${getBackgroundStyled};
  color: ${colors.text_primary};
  padding: ${getPadingStyles};
  width: ${getWidthStyles};
  font-size: ${getFontStyles};
  &:disabled {
      opacity: 0.7;
  }
  &:focus{
      outline: 2px solid red;
  }
  &:active{
      outline: 2px solid red;
  }
`;

export default Button;
