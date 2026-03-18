import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "../features/counter";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
  return (
    <div className="flex flex-col items-center mt-5 space-y-6">
      <h1 className="text-2xl font-bold">Counter App using Redux</h1>
      <h1 className="text-xl font-bold">{count}</h1>
      <div className="flex space-x-4">
        <button
        onClick={() => {dispatch(increment())}}
        className="w-fit h-10 p-1 bg-gray-700 text-white rounded-md">
        Increment
      </button>
      <button
      onClick={() => {dispatch(decrement())}}
      className="w-fit h-10 p-1 bg-blue-950 text-white rounded-md">
        Decrement
      </button>
      <button
      onClick={() => {dispatch(reset())}}
      className="w-fit h-10 p-1 bg-red-900 text-white rounded-md">
        Reset
      </button>
      </div>
    </div>
  );
}

export default Counter;
