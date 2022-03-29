import React, {
  createRef,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';
import { OpacityWithScale } from '../Animations/opacity';
import Portal from '../Portal';

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
          {children}
        </ModalBase>
      </OpacityWithScale>
    </Portal>
  ));
};

export default Modal;
