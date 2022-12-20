import React from "react";
import Image from "next/image";
import MyPic from "../public/jaman.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="mypic">
          <Image src={MyPic} alt="Picture of the author" width={500} height={500} />
        </div>
        <div className="introduction">
          <h1> FRONT END DEVELOPER</h1>
          <p>
            I have 3 years of experience building and desgining software. Currently,
            <br /> I love to work on web application using technologies like
          </p>
          <ul>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Redux</li>
            <li>MUI</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
