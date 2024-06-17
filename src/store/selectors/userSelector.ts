import { selector } from "recoil";
import { emailState, userIdState } from "../atoms/userAtom";

export const userIdSelector = selector({
    key :"userIdSelector",
    get : ({get})=>{
        const state = get(userIdState);
        return state;
    }
})

export const emailSelector = selector({
    key : "emailSelector",
    get : ({get})=>{
        const state = get(emailState);
        return state;
    }
})