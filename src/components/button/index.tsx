import React, { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    children?:ReactNode,
}

const Button:React.FC<ButtonProps>=({children, ...props})=>{
    return(
        <button {...props}>{children}</button>
    );
}

export default Button;