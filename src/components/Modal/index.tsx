import React, {
  ReactNode,
} from 'react';
import styled from 'styled-components';
import Button from '../button';
import Portal from '../Portal';
import Text from '../text';

const ModalBase = styled.div`
padding: 20px;
border-radius: 15px;
margin: 5px;
background-color: white;
min-height: 300px;
`;

export interface ModalProps{
    isOpen:boolean;
    children:ReactNode
    handleClose:()=>void
}

const Modal = ({ isOpen, children, handleClose }:ModalProps) => (!isOpen ? null : (
  <Portal elementId="react-portal-modal-container">
    <ModalBase>
      <Button size="small" onClick={handleClose}>Close</Button>
      <Text size="large" style={{ color: '#333333' }}>Hello World this Shivaraj</Text>
      {children}
    </ModalBase>
  </Portal>
));

export default Modal;
