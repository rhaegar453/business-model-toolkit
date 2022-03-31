import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import colors, { getColor, theme, ThemeType } from '../../utils/theme';

export type ButtonTypes='primary' | 'secondary' | 'default' | 'danger'|'ternary';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTypes;
  children?: ReactNode;
  size?: 'default' | 'small' | 'large' | 'full' | 'wide';
  theme:ThemeType
}

const getBackgroundStyled = ({ variant, theme }: ButtonProps) => {
  switch (variant) {
    case 'primary':
      return getColor(theme, 'primary', colors);
    case 'secondary':
      return getColor(theme, 'secondary', colors);
    case 'danger':
      return getColor(theme, 'danger', colors);
    case 'ternary':
      return getColor(theme, 'ternary', colors);
    default:
      return getColor(theme, 'primary', colors);
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
  border-radius: ${theme.borderRadii?.s};
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
      outline: 1px solid #e8e8e8;
  }
  &:active{
      outline: 1px solid #e8e8e8;
  }
`;

export default Button;
