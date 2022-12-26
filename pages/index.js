import React, { useState } from "react";
import { Counter } from "../features/counter/Counter";
import Title from "../components/Title";



const Home = () => {
  return (
    <>

      <Title title="Home" />
      <Counter />

    </>
  );
};

export default Home;
