import { TaskReducerAction } from "@/types";

export const taskReducerInitialState: {
    lists: Record<string, string>[];
    tags: Record<string, string>[];
    title: string;
    description: string;
} = {
    lists: [],
    tags: [],
    title: "",
    description: "",
};
export function taskReducer(state: typeof taskReducerInitialState, action: TaskReducerAction) {
    const { type, payload } = action;
    switch (type) {
        case "changeList": {
            return {
                ...state,
                lists: [...payload],
            };
        }

        case "changeTag": {
            return {
                ...state,
                tags: [...payload],
            };
        }
        case "changeTitle": {
            return {
                ...state,
                title: payload,
            };
        }
        case "changeDescription": {
            return {
                ...state,
                description: payload,
            };
        }
        default:
            return state;
    }
}
