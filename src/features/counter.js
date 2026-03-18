import { createSlice } from "@reduxjs/toolkit";

const initialValue = 0;
export const counterSlicer = createSlice({
    name:"counter",
    initialState : {value : initialValue},
    reducers: {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        reset : (state) => {
            state.value = 0;
        }
    }
})
export const {increment,decrement,reset} = counterSlicer.actions;
export default counterSlicer.reducer;

