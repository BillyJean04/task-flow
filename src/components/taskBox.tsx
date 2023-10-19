"use client";

import { convertEmojiFromCode, hexToRGBA } from "@/lib/utils";
import { Tasks } from "@/gql/graphql";

const TaskBox = (props: { task: Tasks }) => {
    const list = props.task.taskListsCollection?.edges[0];
    const tag = props.task.taskTagsCollection?.edges[0];

    return (
        <div className="flex flex-col gap-2 p-4 rounded-[10px] bg-white w-[250px] border-2 border-[transparent] cursor-pointer hover:border-[#90beff]">
            <div className="flex gap-4">
                {
                    <>
                        {tag?.node.tags?.name && (
                            <div className={"flex items-center gap-2 text-[0.85rem]"}>
                                <div
                                    style={{
                                        backgroundColor: tag?.node.tags?.color
                                            ? hexToRGBA(tag?.node.tags?.color, 0.2)
                                            : "",
                                        color: tag?.node.tags?.color ? hexToRGBA(tag?.node.tags?.color, 1) : "",
                                    }}
                                    className={"font-bold px-[5px] py-[3px] rounded"}
                                >
                                    {tag?.node.tags?.name}s{" "}
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-2 text-[0.85rem]">
                            {list?.node.lists.img && <div>{convertEmojiFromCode(list.node.lists?.img)}</div>}
                            <div>{list?.node.lists.name}</div>
                        </div>
                    </>
                }
            </div>
            <div className="text-[1.1rem] font-bold">{props.task.title}</div>
            <div className="text-[0.95rem] text-gray-600">{props.task.description}</div>
        </div>
    );
};

export default TaskBox;
