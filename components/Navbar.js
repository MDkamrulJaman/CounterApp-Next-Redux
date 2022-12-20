import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
     <div className="navbar"> <ul>
        <li>
          <Link href="/">
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <b>About Us</b>
          </Link>
        </li>
      </ul></div>
    </>
  );
};

export default Navbar;
