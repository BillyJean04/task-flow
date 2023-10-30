import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import TaskModal from "@/components/modal/taskModal";
import Taskbar from "@/components/taskbar";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row">
            <TaskModal />
            <Sidebar />
            {children}
            <Taskbar />
        </div>
    );
}
