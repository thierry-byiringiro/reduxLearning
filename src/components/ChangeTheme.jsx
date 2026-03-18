import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeTheme() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input
      className="border-2 rounded-md"
        type="text"
        name=""
        id=""
        onChange={(event) => setColor(event.target.value)}
      />
      <button
        onClick={() => {dispatch(changeColor(`${color}`))}}
        className="w-fit h-10 p-1 bg-gray-700 text-white rounded-md"
      >
        CHANGE COLOR
      </button>
    </>
  );
}

export default ChangeTheme;
