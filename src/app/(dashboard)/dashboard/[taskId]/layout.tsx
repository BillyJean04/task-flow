import React, { ReactNode } from "react";
import DashboardTitle from "@/components/dashboardTitle";
import TaskList from "@/components/taskList";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-5 h-[100dvh] w-full p-6 bg-[#f6f5f8]">
            <div className="flex flex-col gap-5 h-[100dvh] w-full p-6 bg-[#f6f5f8]">
                <DashboardTitle titleSlug={"All tasks"} />
                <TaskList />
            </div>
            {children}
        </div>
    );
}
