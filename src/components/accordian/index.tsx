import React, { HTMLAttributes, ReactNode, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';
import Summary from './summary';

export interface AccordianProps extends HTMLAttributes<HTMLDivElement> {
  Summary?: ReactNode;
  description?:string
}

const AccordianBase = styled.div`
  background-color: ${colors.ternary};
  padding: 6px 12px;
  border-radius: 5px;
  color: ${colors.text_primary};
  &:hover {
    transition: height 0.3s linear;
    background-color: ${colors.secondary};
  }
`;

function Accordian(this: { title: string; component: typeof Accordian; }, { children, description, ...rest }: AccordianProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = (val:boolean) => {
    setOpen(val);
  };

  return (
    <AccordianBase {...rest} onMouseEnter={handleToggle.bind(this, true)} onMouseLeave={handleToggle.bind(this, false)}>
      {children}
      {description && isOpen && <Summary>{description}</Summary>}
    </AccordianBase>
  );
}

Accordian.Summary = Summary;

export default Accordian;
