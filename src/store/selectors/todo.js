import { todoState } from "../atoms/todo";
import { selector } from "recoil";
import { userState } from "../atoms/user";

export const isTodoLoading = selector({
    key: 'isTodoLoading',
    get: ({get}) => {
        const state = get(todoState);
        
        return state.isLoading;
    }
})

export const todoDetails = selector({
    key: 'todoDetails',
    get: ({get}) => {
        const state = get(todoState);

        return state.todo;
    }
}) 