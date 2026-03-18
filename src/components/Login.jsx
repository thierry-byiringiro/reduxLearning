import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(login({ name: "HOPE", age: 21, email: "hope@gmail.com" }));
        }}
        className="w-20 h-10 p-1 bg-gray-700 text-white rounded-md"
      >
        Login
      </button>

      <button
        onClick={() => dispatch(logout())}
        className="w-20 h-10 p-1 bg-red-700 text-black rounded-md"
      >
        Logout
      </button>
    </>
  );
}

export default Login;
