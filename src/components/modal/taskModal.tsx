"use client";

import { useContext, useReducer } from "react";
import { TaskContext } from "@/contexts/taskModalContext";
import { useAuthQuery } from "@/hooks/useAuthQuery";
import type { Lists, Tags } from "@/hooks/useRoutes";
import { useSuspendSession } from "@/hooks/useSuspendSession";
import { useMutation } from "@apollo/client";
import {
    GetCategoriesDocument,
    GetTasksDocument,
    InsertIntoTaskListsDocument,
    InsertIntoTasksDocument,
    InsertIntoTaskTagsDocument,
} from "@/gql/graphql";
import { convertEmojiFromCode, hexToRGBA } from "@/lib/utils";
import { Listbox } from "@headlessui/react";
import Modal from "@/components/modal/modal";
import Input from "@/components/ui/input";
import { taskReducer, taskReducerInitialState } from "@/reducers/taskReducer";
import Button from "@/components/ui/button";

const TaskModal = () => {
    const { isOpen, setIsOpen } = useContext(TaskContext);
    const [state, dispatch] = useReducer(taskReducer, taskReducerInitialState);
    const session = useSuspendSession();
    const { data, loading, error } = useAuthQuery(GetCategoriesDocument);
    const [addTask] = useMutation(InsertIntoTasksDocument, { refetchQueries: [GetTasksDocument, "GetTasks"] });
    const [addLists] = useMutation(InsertIntoTaskListsDocument);
    const [addTags] = useMutation(InsertIntoTaskTagsDocument, {
        refetchQueries: [GetTasksDocument, "GetTasks"],
    });

    if (error) {
        console.log(error.message);
    }

    if (loading) {
        return null;
    }

    const createTask = async () => {
        const initialTask = await addTask({
            variables: {
                type: {
                    user_id: session?.user.id,
                    title: state.title,
                    description: state.description,
                },
            },
        });
        const listsToAdd = state.lists.map((list) => ({
            task_id: initialTask.data?.insertIntoTasksCollection?.records[0].id,
            list_id: list.id,
        }));

        const tagsToAdd = state.tags.map((tag) => ({
            task_id: initialTask.data?.insertIntoTasksCollection?.records[0].id,
            tag_id: tag.id,
        }));

        tagsToAdd.length !== 0 &&
            (await addLists({
                variables: {
                    type: listsToAdd,
                },
            }));

        tagsToAdd.length !== 0 &&
            (await addTags({
                variables: {
                    type: tagsToAdd,
                },
            }));
        setIsOpen(false);
    };

    const bodyContent = (
        <div className="flex flex-col gap-3">
            <Listbox
                value={state.lists}
                by="id"
                onChange={(value) => {
                    dispatch({
                        type: "changeList",
                        payload: [...value],
                    });
                }}
                multiple
            >
                <div className="relative mt-1 z-10">
                    <div className="mb-3">Select lists</div>
                    <Listbox.Button className="flex gap-2 relative w-full cursor-pointer min-h-[40px] rounded-lg border-[1px] border-[#90beff] bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
                        {state?.lists
                            ?.map((list) => (list.img ? convertEmojiFromCode(list.img) + " " + list.name : list.name))
                            .join(", ")}
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full  overflow-auto rounded-md bg-white  text-base shadow-lg sm:text-sm">
                        {data?.listsCollection?.edges.map((list: Lists) => (
                            <Listbox.Option
                                className="flex items-center gap-3 relative py-2 pl-10 pr-4 cursor-pointer"
                                key={list.node.id}
                                value={{ id: list.node.id, name: list.node.name, img: list.node.img }}
                            >
                                {list.node.img && convertEmojiFromCode(list.node.img)}
                                {list.node.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
            <Listbox
                value={state.tags}
                by="id"
                onChange={(value) => {
                    dispatch({ type: "changeTag", payload: [...value] });
                }}
                multiple
            >
                <div className="relative mt-1 ">
                    <div className="mb-3">Select tags</div>
                    <Listbox.Button className="flex gap-2 relative w-full min-h-[40px] cursor-pointer border-[1px] border-[#90beff] rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
                        {state?.tags?.map((tag) => (
                            <div
                                key={tag.id}
                                style={{
                                    backgroundColor: tag?.color ? hexToRGBA(tag?.color, 0.2) : "",
                                    color: tag?.color ? hexToRGBA(tag?.color, 1) : "",
                                }}
                                className={"font-bold px-[5px] py-[3px] rounded"}
                            >
                                {tag.name}
                            </div>
                        ))}
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full z-15 overflow-auto rounded-md bg-white text-base shadow-lg sm:text-sm">
                        {data?.tagsCollection?.edges.map((tag: Tags) => (
                            <Listbox.Option
                                className="flex items-center gap-3 relative py-2 pl-10 pr-4 cursor-pointer"
                                key={tag.node.id}
                                value={{ id: tag.node.id, name: tag.node.name, color: tag.node.color }}
                            >
                                <div
                                    style={{
                                        backgroundColor: tag?.node?.color ? hexToRGBA(tag?.node?.color, 0.2) : "",
                                        color: tag?.node?.color ? hexToRGBA(tag?.node?.color, 1) : "",
                                    }}
                                    className={"font-bold px-[5px] py-[3px] rounded"}
                                >
                                    {tag?.node.name}
                                </div>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
            <div>Title</div>
            <Input
                type="text"
                value={state.title}
                onChange={(event) => dispatch({ type: "changeTitle", payload: event.target.value })}
            />
            <div>Description</div>
            <Input
                type="text"
                value={state.description}
                onChange={(event) => dispatch({ type: "changeDescription", payload: event.target.value })}
            />
            <Button onClick={() => createTask()}>Create Task</Button>
        </div>
    );

    return (
        <Modal
            title="Add a new task"
            body={bodyContent}
            isOpen={isOpen}
            onClose={setIsOpen}
            onClickOutside={() => setIsOpen(!isOpen)}
        />
    );
};

export default TaskModal;
