import TaskList from "@/components/taskList";
import DashboardTitle from "@/components/dashboardTitle";

const Page = () => {
    return (
        <div className="flex flex-row gap-5  w-full p-6 bg-[#f6f5f8]">
            <div className="flex flex-col gap-5  w-full p-6 bg-[#f6f5f8]">
                <DashboardTitle titleSlug={"All tasks"} />
                <TaskList />
            </div>
        </div>
    );
};

export default Page;
