"use client";

import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<ButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <button onClick={onClick} {...props} className="bg-[#90beff] p-3 font-semibold rounded-[8px]">
            {children}
        </button>
    );
};

export default Button;
