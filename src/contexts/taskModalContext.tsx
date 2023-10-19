"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type TaskContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const TaskContext = createContext<TaskContextType>({
    isOpen: false,
    setIsOpen: () => {},
});

export default function TaskModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return <TaskContext.Provider value={{ isOpen, setIsOpen }}>{children}</TaskContext.Provider>;
}
