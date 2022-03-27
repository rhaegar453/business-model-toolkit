import React, { HTMLAttributes, ReactNode, useState } from 'react';

export type MessageType='error'|'success'|'info'

interface FieldProps extends HTMLAttributes<HTMLInputElement>{
    children?:ReactNode
    type:MessageType
    message:string
}

export interface FieldContextType{
    message?:string
    type?:MessageType
    setMessage?:(message:string)=>void
}

export const FieldContext = React.createContext<FieldContextType>({});

const Field:React.FC<FieldProps> = ({ type, message, children }) => {
  const [fieldMessage, setMessage] = useState(message);
  return (
    <FieldContext.Provider value={{ message: fieldMessage, type, setMessage }}>
      {children}
    </FieldContext.Provider>
  );
};

export default Field;
