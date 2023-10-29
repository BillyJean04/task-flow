"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, className, ...props }, ref) => {
    return (
        <input
            className={cn("border-[1px] border-[#90beff] p-[7px] rounded", className)}
            ref={ref}
            type={type}
            {...props}
        />
    );
});

Input.displayName = "Input";
export default Input;
