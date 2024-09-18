// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./index.css";
import Appbar from "./components/Appbar";
import { RecoilRoot } from "recoil";
import Landing from "./components/Landing";
import { ThemeProvider } from "./components/theme-provider";
import ShowTodos from "./components/ShowTodos";
import AddTodos from "./components/AddTodos";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <RecoilRoot>
            <Appbar />
            <main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todos" element={<ShowTodos />} />
                <Route path="addTodos" element={<AddTodos />} />
              </Routes>
            </main>
          </RecoilRoot>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
