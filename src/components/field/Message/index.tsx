import styled from 'styled-components';
import colors from '../../../utils/theme';
import { MessageType } from '../index';

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

const Message = styled.p`
  margin: 0px;
  font-size: 10px;
  color: ${getColorStyle};
`;

export default Message;
