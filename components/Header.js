import React from "react";
import Link from "next/link";
import Style from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={  Style.header}>
      <div className={Style.container}>
        <Link className={Style.logo} href="/" >
           86it.</Link>
        <ul >
          <li>
            <Link className={Style.headerText} href="/">Category1</Link>
          </li>
          <li>
            <Link href="/">Category2</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
/* mongodb */
