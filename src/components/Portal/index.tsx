import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createWrapper = (wrapperId:string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface PortalProps{
  children?:ReactNode
  elementId?:string
}

const Portal = ({ children, elementId = 'react-portal-element' }:PortalProps) => {
  const [isLoaded, setLoaded] = useState(false);
  const [wrapperElement, setWrapperElement] = useState<any>(null);
  useLayoutEffect(() => {
    setLoaded(true);
    let element = document.getElementById(elementId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapper(elementId);
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