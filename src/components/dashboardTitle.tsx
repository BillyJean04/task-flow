"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { FC, useContext } from "react";
import { TaskContext } from "@/contexts/taskModalContext";

interface DashboardTitleProps {
    titleSlug: string;
}

const DashboardTitle: FC<DashboardTitleProps> = ({ titleSlug }) => {
    const { isOpen, setIsOpen } = useContext(TaskContext);
    return (
        <div className="flex items-center justify-between">
            <h1 className="font-medium text-[1.5rem]">{titleSlug}</h1>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-5 px-4 py-2 rounded cursor-pointer bg-white"
            >
                <AiOutlinePlus />
                <div>New Task</div>
            </div>
        </div>
    );
};

export default DashboardTitle;
