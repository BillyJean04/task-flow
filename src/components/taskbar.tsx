"use client";

import Profile from "@/components/profile";
import { usePathname, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@apollo/client";
import { AddTaskToCheckListDocument, CompleteTaskDocument, GetFullTaskDocument, GetTasksDocument } from "@/gql/graphql";
import { cn, convertEmojiFromCode, hexToRGBA } from "@/lib/utils";
import { AiOutlinePlus } from "react-icons/ai";
import Checkbox from "@/components/checkbox";
import { useCallback, useEffect, useRef, useState } from "react";
import Input from "@/components/ui/input";
import { BiMoon, BiSun } from "react-icons/bi";
import Button from "@/components/ui/button";

const Taskbar = () => {
    const inputArr = {
        type: "text",
        id: 1,
        value: "",
    };
    const router = useRouter();
    const pathname = usePathname();
    const { data } = useQuery(GetFullTaskDocument, {
        variables: {
            uuid: pathname.split("/")[2],
        },
    });

    const [task, setTask] = useState(inputArr);
    const [isClicked, setIsClicked] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const [addTask] = useMutation(AddTaskToCheckListDocument, {
        refetchQueries: [GetFullTaskDocument, "GetFullTask"],
    });
    const [completeTask] = useMutation(CompleteTaskDocument, {
        refetchQueries: [GetTasksDocument, "GetTasks"],
    });

    const addNewTaskToCheckList = useCallback(async () => {
        await addTask({
            variables: {
                value: {
                    task_id: data?.tasksCollection?.edges[0].node.id,
                    item_text: task.value,
                    completed: false,
                },
            },
        });
        setTask({
            ...task,
            value: "",
        });
    }, [addTask, data?.tasksCollection?.edges, task]);

    useEffect(() => {
        if (isClicked && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isClicked]);
    return (
        <div className="flex flex-col p-6 h-[100dvh] gap-5 w-[410px]">
            <div className="flex items-center justify-between flex-row">
                <div className="flex items-center gap-3 bg-[#f6f5f8] rounded-2xl p-1">
                    <div className="bg-white p-1 rounded-2xl cursor-pointer">
                        <BiSun size="1.5rem" />
                    </div>
                    <div className="cursor-pointer p-1 rounded-2xl">
                        <BiMoon size="1.5rem" />
                    </div>
                </div>
                <Profile />
            </div>

            {!pathname.split("/")[2] ? (
                <div className="flex flex-col justify-center h-full items-center">
                    <div className="">Select or create a task</div>
                </div>
            ) : (
                <div className="flex flex-col gap-3 bg-[#f6f5f8] p-4 rounded-2xl">
                    <div className="flex flex-col gap-2">
                        <div className="font-medium text-[1.1rem]">{data?.tasksCollection?.edges[0].node.title}</div>
                        <div className="font-normal">{data?.tasksCollection?.edges[0].node.description}</div>
                    </div>
                    <div className="border-[1px] border-gray-200"></div>
                    <div className="flex gap-3 flex-col">
                        <div className="flex flex-col gap-3">
                            <span className="font-bold">List</span>
                            <div className="flex flex-row gap-2 flex-wrap">
                                {data?.tasksCollection?.edges.map(
                                    (task) =>
                                        task.node.taskListsCollection?.edges.map((list) => (
                                            <div key={list.cursor}>
                                                {list?.node.lists.img && convertEmojiFromCode(list.node.lists.img)}{" "}
                                                {list.node.lists.name}
                                            </div>
                                        )),
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="font-bold">Tag</span>
                            <div className="flex flex-row gap-2 flex-wrap">
                                {data?.tasksCollection?.edges.map(
                                    (task) =>
                                        task.node.taskTagsCollection?.edges.map((tag) => (
                                            <div
                                                key={tag.cursor}
                                                style={{
                                                    backgroundColor: tag?.node.tags?.color
                                                        ? hexToRGBA(tag?.node.tags?.color, 0.2)
                                                        : "",
                                                    color: tag?.node.tags?.color
                                                        ? hexToRGBA(tag?.node.tags?.color, 1)
                                                        : "",
                                                }}
                                                className="font-medium px-[5px] py-[3px] rounded"
                                            >
                                                {tag.node.tags?.name}
                                            </div>
                                        )),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {pathname.split("/")[2] ? (
                <div className="flex gap-3 flex-col justify-between h-full">
                    <div
                        className={cn(
                            data?.tasksCollection?.edges[0].node.checklistsCollection?.edges.length === 0
                                ? "flex flex-col  h-full "
                                : "flex flex-col h-full",
                        )}
                    >
                        <span className="flex items-center justify-between font-medium text-[1.1rem]">
                            To Do
                            <div className="cursor-pointer" onClick={() => setIsClicked(!isClicked)}>
                                <AiOutlinePlus />
                            </div>
                        </span>
                        <div className="flex flex-col justify-between h-full">
                            {isClicked && (
                                <Input
                                    onBlur={() => {
                                        addNewTaskToCheckList();
                                        setIsClicked(false);
                                    }}
                                    ref={inputRef}
                                    key={task.id}
                                    type="text"
                                    onChange={(event) =>
                                        setTask({
                                            ...task,
                                            value: event.target.value,
                                        })
                                    }
                                    value={task.value}
                                />
                            )}
                            {data?.tasksCollection?.edges[0].node.checklistsCollection?.edges.length !== 0 ? (
                                data?.tasksCollection?.edges[0].node.checklistsCollection?.edges.map((checkList) => (
                                    <Checkbox
                                        id={checkList.node.checklist_id}
                                        key={checkList.cursor}
                                        text={checkList.node.item_text}
                                        checked={checkList?.node?.completed}
                                    />
                                ))
                            ) : (
                                <div className="flex justify-center h-full items-center">
                                    <div className="">Empty</div>
                                </div>
                            )}
                            <Button
                                onClick={() => {
                                    completeTask({
                                        variables: {
                                            taskId: data?.tasksCollection?.edges[0].node.id,
                                        },
                                    });
                                    router.push("/dashboard");
                                }}
                            >
                                Mark as done
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Taskbar;
