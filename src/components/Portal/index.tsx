import {
  ReactNode, useLayoutEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';

const createWrapper = (wrapperId:string, handleClick:(clickedAway:boolean)=>void) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  wrapperElement.setAttribute('style', 'background-color:#141313bd;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;width:100%;height:100%;');
  document.body.appendChild(wrapperElement);
  wrapperElement.onclick = (e) => {
    handleClick(e.target === wrapperElement);
    e.stopPropagation();
  };
  return wrapperElement;
};

interface PortalProps{
  children?:ReactNode
  elementId?:string
  handleClickAway?:()=>void
}

const Portal = ({ children, elementId = 'react-portal-element', handleClickAway = () => {} }:PortalProps) => {
  const [isLoaded, setLoaded] = useState(false);
  const [wrapperElement, setWrapperElement] = useState<any>(null);

  const handleClickEvent = (clickedAway:boolean) => {
    if (clickedAway) {
      handleClickAway();
    }
  };
  useLayoutEffect(() => {
    setLoaded(true);
    let element = document.getElementById(elementId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapper(elementId, handleClickEvent);
    }
    setWrapperElement(element);
    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [elementId]);
  return isLoaded ? createPortal(children, wrapperElement) : null;
};

export default Portal;
