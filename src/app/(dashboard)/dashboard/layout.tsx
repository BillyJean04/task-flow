import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row">
            <Sidebar />
            {children}
        </div>
    );
}
