"use client";

import { Dispatch, FC, ReactElement, SetStateAction, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
    onClickOutside: () => void;
    title: string;
    body: ReactElement;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, onClickOutside, title, body }) => {
    const ref = useRef(null);

    useClickOutside(ref, onClickOutside);

    return (
        isOpen && (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  bg-neutral-800/20">
                <div
                    ref={ref}
                    className="flex rounded-2xl bg-white p-5 gap-5 flex-col relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto"
                >
                    <div className="flex justify-between">
                        {title}
                        <div className="flex cursor-pointer items-center">
                            <AiOutlineClose size="1.3rem" onClick={() => onClose(false)} />
                        </div>
                    </div>
                    {body}
                </div>
            </div>
        )
    );
};

export default Modal;
