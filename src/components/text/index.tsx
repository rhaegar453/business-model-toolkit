import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface TextProps extends HTMLAttributes<HTMLParagraphElement>{
    children?:ReactNode
    size:'small'|'default'|'medium'|'large'|'extralarge'|'special'
    bold:boolean
}

const getFontStyles = ({ size }:TextProps) => {
  switch (size) {
    case 'small':
      return '10px';
    case 'medium':
      return '16px';
    case 'large':
      return '20px';
    case 'extralarge':
      return '26px';
    case 'special':
      return '32px';
    default:
      return '14px';
  }
};

const getFontWeight = ({ bold }:TextProps) => (bold ? 'bold' : '');

const Text = styled.p`
margin:0px;
font-size: ${getFontStyles};
font-weight: ${getFontWeight};
`;

export default Text;
