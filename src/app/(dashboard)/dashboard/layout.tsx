import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import TaskModal from "@/components/modal/taskModal";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row">
            <TaskModal />
            <Sidebar />
            {children}
        </div>
    );
}
