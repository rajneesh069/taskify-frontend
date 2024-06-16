import Todo from "./Todo";



export default function ShowTodos() {
  
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
