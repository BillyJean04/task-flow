"use client";

import TaskBox from "@/components/taskBox";
import { gql } from "@/gql";
import SkeletonRectangle from "@/components/skeleton";
import { useAuthQuery } from "@/hooks/useAuthQuery";
import { TasksEdge } from "@/gql/graphql";

export const GET_TASKS = gql(
    ` query GetTasks($userId: UUID!) {
    tasksCollection(filter: { user_id: { eq: $userId } }) {
        edges {
            cursor
            node {
                title
                description
                taskListsCollection {
                    edges {
                        cursor
                        node {
                            lists {
                                img
                                name
                            }
                        }
                    }
                }
                taskTagsCollection {
                    edges {
                        cursor
                        node {
                            tags {
                                color
                                name
                            }
                        }
                    }
                }
            }
        }
    }
}`,
);

const TaskList = () => {
    const { data, loading } = useAuthQuery(GET_TASKS);

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
