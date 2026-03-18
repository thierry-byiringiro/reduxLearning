import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  return (
    <>
      <div className="flex mx-auto flex-col items-center mt-30 space-y-2">
        <Profile />
        <Login />
        <ChangeTheme/>
      </div>
    </>
  );
}

export default App;
