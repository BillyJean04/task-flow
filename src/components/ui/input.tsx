"use client";

import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ type, className, ...props }) => {
    return <input className={cn("border-[1px] border-[#90beff] p-[7px] rounded", className)} type={type} {...props} />;
};

export default Input;
