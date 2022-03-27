import React, { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import colors from '../../../utils/theme';
import { FieldContext, MessageType } from '../index';

const getColorStyle = ({ type }: { type: MessageType }) => {
  switch (type) {
    case 'error':
      return colors.danger;
    case 'info':
      return colors.primary;
    default:
      return colors.text_primary;
  }
};

const MessageBase = styled.p`
  margin: 3px 0px;
  font-size: 10px;
  color: ${getColorStyle};
`;

const Message = ({ children }:{children:ReactNode}) => {
  const { type } = useContext(FieldContext);
  return <MessageBase type={type || 'info'}>{children}</MessageBase>;
};

export default Message;
