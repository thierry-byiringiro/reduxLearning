import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeTheme from "./components/ChangeTheme";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div className="flex mx-auto flex-col items-center mt-30">
        <div className="space-y-2 flex flex-col items-center">
          <Profile />
          <Login />
          <ChangeTheme />
        </div>
        <Counter />
      </div>
    </>
  );
}

export default App;
