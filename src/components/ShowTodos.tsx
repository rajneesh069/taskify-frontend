import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function ShowTodos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish the report",
      description: "Complete the quarterly sales report by Friday",
      completed: false,
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Pick up milk, eggs, and bread from the store",
      completed: true,
    },
    {
      id: 3,
      title: "Call mom",
      description: "Remember to call mom this weekend",
      completed: false,
    },
  ])
  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const editTodo = (id: number, title: string, description: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title, description } : todo)))
  }
  return (
    <div className={`w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-zinc-800 text-zinc-200`}>
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
                <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => editTodo(todo.id, "Updated Todo", "This is an updated todo description")}
                >
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => deleteTodo(todo.id)}>
                  Remove
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}