import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";
import { BASE_URL } from "../../config";
import { Todo } from "../../types";

export const todoStates = atomFamily<Todo[], number>({
  key: "todoStates",
  default: selectorFamily({
    key: "todos/default",
    get: (userId: number) => async () => {
      const response = await axios.get(`${BASE_URL}/users/${userId}/todos`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
  }),
});
