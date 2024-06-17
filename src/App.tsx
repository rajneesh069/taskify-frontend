// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./index.css";
import ShowTodo from "./components/ShowTodos";
import Appbar from "./components/Appbar";
import { RecoilRoot } from "recoil";
import Landing from "./components/Landing";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <BrowserRouter>
        <RecoilRoot>
          <header className="p-4">
            <Appbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/users/:userId" element={<ShowTodo />} />
            </Routes>
          </main>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
};

export default App;
