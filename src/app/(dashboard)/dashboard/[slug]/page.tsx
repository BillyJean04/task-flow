import TaskList from "@/components/taskList";
import DashboardTitle from "@/components/dashboardTitle";

export default function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug === "all-tasks" && "All Tasks";

    return (
        <div className="flex flex-col gap-5 h-[100dvh] w-full p-6 bg-[#f6f5f8]">
            <DashboardTitle titleSlug={slug ? slug : ""} />
            <TaskList />
        </div>
    );
}
