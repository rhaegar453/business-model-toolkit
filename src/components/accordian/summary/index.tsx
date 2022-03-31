import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../../utils/theme';
import Text from '../../text';
import Animations from '../../Animations';

export interface SummaryProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const SummaryBase = styled.div`
  background-color: ${colors.secondary};
  padding: 10px;
`;

const Summary: React.FC<SummaryProps> = ({ children }) => (
  <Animations.OpacityAndHeight>
    <SummaryBase>
      <Text size="small">{children}</Text>
    </SummaryBase>
  </Animations.OpacityAndHeight>
);

export default Summary;
