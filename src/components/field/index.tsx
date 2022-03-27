import React, { HTMLAttributes, ReactNode, useState } from 'react';
import Input from './Input';
import Message from './Message';

export type MessageType='error'|'success'|'info'

export interface FieldProps extends HTMLAttributes<HTMLInputElement>{
    children?:ReactNode
    type?:MessageType
    message?:string
    Message?:ReactNode
    Input?:ReactNode
}

export interface FieldContextType{
    message?:string
    type?:MessageType
    setMessage?:(message:string)=>void
}

export const FieldContext = React.createContext<FieldContextType>({});

const Field = ({ type, message, children }:FieldProps) => {
  const [fieldMessage, setMessage] = useState(message);
  return (
    <FieldContext.Provider value={{ message: fieldMessage, type, setMessage }}>
      {children}
    </FieldContext.Provider>
  );
};

Field.Message = Message;
Field.Input = Input;

export default Field;
