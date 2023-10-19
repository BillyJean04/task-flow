export type TaskReducerAction =
    | { type: "changeList"; payload: Record<string, string>[] }
    | { type: "changeTag"; payload: Record<string, string>[] }
    | { type: "changeTitle"; payload: string }
    | {
          type: "changeDescription";
          payload: string;
      };
