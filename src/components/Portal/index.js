import React, { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createWrapper = (wrapperId) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const Portal = ({ children, elementId = 'react-portal-element' }) => {
  const [wrapperElement, setWrapperElement] = useState(null);
  useLayoutEffect(() => {
    let element = document.getElementById(elementId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapper(elementId);
    }
    setWrapperElement(element);
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [elementId]);
  const element = document.getElementById(elementId);
  return createPortal(children, wrapperElement);
};

export default Portal;
