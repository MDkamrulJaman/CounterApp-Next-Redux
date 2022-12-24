import React from "react";
import { Counter } from "../features/counter/Counter";
import Title from "../components/Title";
import DarkMode from "../components/DarkMode";

const index = () => {
  return (
    <>
      <Title title="Home" />
      <Counter />

      <DarkMode />
    </>
  );
};

export default index;
