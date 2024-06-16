// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";
import ShowTodo from "./components/ShowTodos";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <BrowserRouter>
        <header className="p-4">
          <DarkModeToggle />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users/:userId" element={<ShowTodo/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
