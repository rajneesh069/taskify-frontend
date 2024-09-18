// ShowTodos.tsx
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Todo from "./Todo"; // Import Todo component

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function ShowTodos() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (todo: TodoItem) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const handleSave = (updatedTodo: TodoItem) => {
    setTodos(todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-zinc-800 text-zinc-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Todos</h2>
      </div>
      <p className="text-zinc-400 mb-6">Manage your tasks and stay organized.</p>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-4 rounded-lg shadow-md ${
              todo.completed ? "line-through text-zinc-500" : "bg-zinc-700 text-zinc-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{todo.title}</h3>
                <p className="text-zinc-400">{todo.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTodo && (
        <Todo
          todo={selectedTodo}
          isOpen={isModalOpen}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
