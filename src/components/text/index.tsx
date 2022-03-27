import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  size?: 'small' | 'default' | 'medium' | 'large' | 'extralarge' | 'special';
  bold?: boolean;
}

const getFontStyles = ({ size = 'default' }: TextProps) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'medium':
      return '20px';
    case 'large':
      return '28px';
    case 'extralarge':
      return '32px';
    case 'special':
      return '40px';
    default:
      return '14px';
  }
};

const getFontWeight = ({ bold = false }: TextProps) => (bold ? 'bold' : '');

const Text = styled.p`
  margin: 0px;
  font-size: ${getFontStyles};
  font-weight: ${getFontWeight};
  color: ${colors.text_primary};
`;

export default Text;
