import React from "react";
import Link from "next/link";
import Style from "../styles/Header.module.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">86it.</Link>
        <ul>
          <li>
            <Link href="/">Category</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
