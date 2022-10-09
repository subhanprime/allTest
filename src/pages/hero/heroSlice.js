import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "hercounterSlice",
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.value += 1;
        },
        decrement: (state, actions) => {
            if (state.value - 1 < 0)
                state.value = 0;
            else
                state.value -= 1;
        },
        incValue: (state, action) => {
            state.value = state.value + action.payload
        }
    }
});
export const { increment, decrement, incValue } = counterSlice.actions;
export default counterSlice.reducer
