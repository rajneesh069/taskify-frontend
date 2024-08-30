import { useRecoilValue, useRecoilValueLoadable } from "recoil";
// import Todo from "./Todo";
import { todosState } from "../store/atoms/todoAtom";
import { userIdState } from "../store/atoms/userAtom";
import { Todo as TodoType } from "../lib/types";
import Todo from "./Todo";

export default function ShowTodos() {
  const userId = useRecoilValue(userIdState);
  const todos = useRecoilValueLoadable(todosState(userId));
  if (todos.state === "hasValue") {
    return (
      <div className="flex flex-col gap-3 dark:text-white text-black justify-center content-center items-center">
        {todos.contents
          ? todos.contents.map((todo: TodoType) => (
              <Todo key={todo.id} todoId={todo.id} />
            ))
          : "No todos found"}
      </div>
    );
  } else if (todos.state === "loading") {
    return "Loading";
  } else {
    return "Error";
  }
}
