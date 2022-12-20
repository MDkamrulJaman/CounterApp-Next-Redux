import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByTen,
  decrementByTen,
  reset,
} from "../counter/CounterSlice";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="appName">
          <h1>
            <b>Counter App</b>
          </h1>
        </div>
        <h1 className="countValue">
          <span>{count}</span>
        </h1>
        <Stack paddingLeft={25} spacing={2} direction="row">
          <Button
            variant="contained"
            color="success"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>

          <Button
            variant="contained"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
          <Button
            variant="outlined"
            aria-label="Increment value"
            onClick={() => dispatch(incrementByTen())}
          >
            increment by 10
          </Button>

          <Button
            variant="outlined"
            aria-label="Decrement value"
            onClick={() => dispatch(decrementByTen())}
          >
            Decrement by 10
          </Button>

          <Button variant="outlined" color="error" onClick={() => dispatch(reset())}>
            Reset Value
          </Button>
        </Stack>
      </div>
    </>
  );
}
