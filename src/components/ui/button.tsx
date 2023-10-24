"use client";

import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<ButtonProps> = ({ onClick, className, children, ...props }) => {
    return (
        <button onClick={onClick} className={cn("bg-[#90beff] p-3 font-semibold rounded-[8px]", className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
