import { useRecoilValueLoadable } from "recoil";
import { todoState } from "../store/atoms/todoAtom";
import { Suspense } from "react";

export default function Todo({ todoId }: { todoId: number }) {
  const todo = useRecoilValueLoadable(todoState(todoId));

  return (
    <Suspense fallback={"loading..."}>
      <div className="dark:text-white text-black border border-black flex flex-col gap-3">
        <p>Title : {todo.contents.title}</p>
        <p>Description : {todo.contents.description}</p>
      </div>
    </Suspense>
  );
}
