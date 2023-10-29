"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import {
    DeleteCheckListTaskDocument,
    GetFullTaskDocument,
    SetCheckBoxValueDocument,
    UpdateCheckListTaskValueDocument,
} from "@/gql/graphql";
import Input from "@/components/ui/input";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

interface CheckBoxProps {
    id: number;
    text: string;
    checked: boolean;
}
const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(({ ...props }, ref) => {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked);
    const [isEdit, setIsEdit] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [setValue] = useMutation(SetCheckBoxValueDocument);
    const [updateInputValue] = useMutation(UpdateCheckListTaskValueDocument, {
        refetchQueries: [GetFullTaskDocument, "GetFullTask"],
    });
    const [deleteTask] = useMutation(DeleteCheckListTaskDocument, {
        refetchQueries: [GetFullTaskDocument, "GetFullTask"],
    });

    const handleAddTaskClick = async () => {
        setIsChecked(!isChecked);

        await setValue({
            variables: {
                id: props.id,
                value: !isChecked,
            },
        });
    };

    const handleClickEdit = (e: MouseEvent) => {
        e.stopPropagation();
        setIsEdit(!isEdit);
    };

    const handleDeleteTask = async (e: MouseEvent) => {
        e.stopPropagation();

        await deleteTask({
            variables: {
                taskId: props.id,
            },
        });
    };

    const addNewTaskToCheckList = useCallback(async () => {
        await updateInputValue({
            variables: {
                taskId: props.id,
                value: inputValue,
            },
        });
        setIsEdit(false);
    }, [inputValue, props.id, updateInputValue]);

    useEffect(() => {
        if (isEdit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputValue, isEdit, props.id, updateInputValue]);

    return (
        <div
            onClick={handleAddTaskClick}
            className="cursor-pointer flex items-center gap-3 border-[1px] border-gray-300 p-2 rounded"
        >
            <Input
                type="checkbox"
                id="subscribeNews"
                name="subscribe"
                ref={ref}
                checked={isChecked}
                readOnly={true}
                className="cursor-pointer rounded border-gray-500 checked:bg-[#53bb88] checked:hover:bg-[#53bb88] outline-none checked:outline-none"
            />
            <div className="flex w-full justify-between items-center">
                {isEdit ? (
                    <Input
                        className="px-[5px] py-0"
                        ref={inputRef}
                        onBlur={() => {
                            addNewTaskToCheckList();
                        }}
                        type="text"
                        onChange={(event) => setInputValue(event.target.value)}
                        value={inputValue}
                    />
                ) : (
                    <>
                        {props.text}
                        <div className="flex flex-row gap-2">
                            <AiOutlineEdit
                                className="hover:text-[#53bb88]"
                                onClick={(e: MouseEvent) => handleClickEdit(e)}
                                size="1.2rem"
                            />
                            <AiOutlineDelete
                                className="hover:text-red-600"
                                onClick={(e: MouseEvent) => handleDeleteTask(e)}
                                size="1.2rem"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
});

Checkbox.displayName = "CheckBox";
export default Checkbox;
