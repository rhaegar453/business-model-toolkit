import React, {
  createRef,
  ReactNode, useEffect, useRef,
} from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../utils/theme';
import { OpacityWithScale } from '../Animations/opacity';
import Button from '../button';
import Field from '../field';
import Portal from '../Portal';
import Text from '../text';

const ModalBase = styled.div`
padding: 20px;
border-radius: 15px;
margin: 5px;
background-color: ${colors.ternary};
min-height: 300px;
min-width: 60%;
`;

export interface ModalProps{
    isOpen:boolean;
    children:ReactNode
    handleClose:()=>void
}

const Modal = ({ isOpen, children, handleClose }:ModalProps) => {
  const modalRef = createRef<HTMLDivElement>();

  const handleClickAway = () => {
    handleClose();
  };

  return (!isOpen ? null : (
    <Portal elementId="react-portal-modal-container" handleClickAway={handleClickAway}>
      <OpacityWithScale style={{ display: 'flex', justifyContent: 'center', width: '80%' }} ref={modalRef}>
        <ModalBase>
          <Button size="small" onClick={handleClose}>Close</Button>
          <Text size="large">Hello World this Shivaraj</Text>
          <Field>
            <Field.Input placeholder="Please enter your name" />
          </Field>
          {children}
        </ModalBase>
      </OpacityWithScale>
    </Portal>
  ));
};

export default Modal;
