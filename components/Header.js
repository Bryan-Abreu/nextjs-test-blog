import React from "react";
import Link from "next/link";
import Style from "../styles/Header.module.css"

const Header = () => {
  return (
    <header>
      <div className={ Style.container}>
        <Link href="/" className={Style.logo}>86it.</Link>
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
