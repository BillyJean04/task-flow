"use client";

import TaskBox from "@/components/taskBox";
import SkeletonRectangle from "@/components/skeleton";
import { useAuthQuery } from "@/hooks/useAuthQuery";
import { GetTasksDocument, TasksEdge } from "@/gql/graphql";

const TaskList = () => {
    const { data, loading } = useAuthQuery(GetTasksDocument);

    return (
        <div className="flex gap-5 flex-wrap ">
            {loading ? (
                <SkeletonRectangle height={128} lines={1} unEqualWidth gap={8} className="bg-gray-200 rounded-md" />
            ) : null}
            {data?.tasksCollection?.edges.map((edge: TasksEdge) => (
                <div key={edge.cursor} className="flex">
                    <TaskBox task={edge.node!} />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
