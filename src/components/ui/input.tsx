"use client";

import { FC, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ type, ...props }) => {
    return <input className="border-[1px] border-[#90beff] p-[7px] rounded" type={type} {...props} />;
};

export default Input;
