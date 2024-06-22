import { atom } from "recoil";

export const todoState = atom({
    key: 'todoState',
    default: {
        isLoading: true,
        todo: null
    },
})