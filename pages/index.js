import React from "react";
import { Counter } from "../features/counter/Counter";
import Title from "../components/Title";

const index = () => {
  return (
    <>
      <Title title="Home" />
      <Counter />
    </>
  );
};

export default index;
