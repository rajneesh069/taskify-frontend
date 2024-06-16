import axios from "axios";
import {
  atomFamily,
  selectorFamily,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { BASE_URL } from "../../config";
import { Todo } from "../../types";
import { userIdState } from "./userAtom";

export const todoState = atomFamily<Todo, number>({
  key: "todoState",
  default: selectorFamily({
    key: "todos/default",
    get: (todoId: number) => async () => {
      const userId = useRecoilValue(userIdState);
      const todos = useRecoilValueLoadable(todosState(userId));
      if (todos.state === "hasValue") {
        return todos.contents.find((todo: Todo) => todo.id === todoId);
      } else {
        return null;
      }
    },
  }),
});

export const todosState = atomFamily({
  key: "todosState",
  default: selectorFamily({
    key: "todosArray/default",
    get: (userId: number) => async () => {
      const response = await axios.get(`${BASE_URL}/users/${userId}/todos`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data.todos;
    },
  }),
});
