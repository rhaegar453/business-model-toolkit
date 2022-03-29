import React, {
  ReactNode,
} from 'react';
import styled, { CSSProperties } from 'styled-components';
import useDevice from '../../utils/hooks/useDevice';
import colors from '../../utils/theme';
import Animations from '../Animations';
import Portal from '../Portal';

const ModalBase = styled.div`
padding: 20px;
border-radius: 15px;
margin: 5px;
background-color: ${colors.ternary};
min-height: 300px;
margin-bottom: 200px;
min-width: ${() => {
    const { getDevice } = useDevice();
    const device = getDevice();
    return device === 'mobile' ? '100%' : '60%';
  }};
`;

export interface ModalProps{
    isOpen:boolean;
    children:ReactNode
    handleClose:()=>void,
    style:CSSProperties
}

const Modal = ({
  isOpen, children, handleClose, style,
}:ModalProps) => {
  const handleClickAway = () => {
    handleClose();
  };

  return (!isOpen ? null : (
    <Portal elementId="react-portal-modal-container" fullSize handleClickAway={handleClickAway}>
      <Animations.OpacityWithScale>
        <ModalBase style={style}>
          {children}
        </ModalBase>
      </Animations.OpacityWithScale>
    </Portal>
  ));
};

export default Modal;
