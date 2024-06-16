import Todo from "./Todo";

export interface Todo {
  title: string;
  description: string;
  user_id: number;
  id: number;
}

export default function ShowTodo(todos: Todo[]) {
  return (
    <div className="flex flex-col gap-3 dark:text-white text-black justify-center content-center items-center">
      {todos.map((todo) => (
        <div>
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        </div>
      ))}
    </div>
  );
}
