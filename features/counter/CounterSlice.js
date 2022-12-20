import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  lowerband: 0,
  upperband: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByTen: (state) => {
      state.value += 10;
    },
    decrementByTen: (state) => {
      if (state.value > 0 && state.value > 9) {
        state.value -= 10;
      }
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = state.value - state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByTen, decrementByTen, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
