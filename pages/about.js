import React from "react";
import About from "../components/About";
// import MobileNavigation from "../components/MobileNavigation";
import Title from "../components/Title";

const about = () => {
  return (
    <>
      <Title title="About" />
      <About />
      {/* <MobileNavigation /> */}
    </>
  );
};

export default about;
