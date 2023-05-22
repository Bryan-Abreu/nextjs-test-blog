import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "../styles/Header.module.css";
import { graphCms } from "../lib/graphCms";

const Header = () => {
    //-----------------------Api call ---------------------->
  const [categoryLinks, setCategoryLinks] = useState([]);
  useEffect(() => {
    async function fetchData (){
    const { categories } = await graphCms.request(`
        query Assets {
            categories {
              color {
                css
              }
              name
            }
          }
        `);
        setCategoryLinks(categories);
    }
    fetchData();
  }, []);

  //--------------------------------------------------------->
  return (
    <header className={Style.header}>
      <div className={Style.container}>
        <Link className={Style.logo} href="/">
          86it.
        </Link>
        <ul>
          {categoryLinks.map((link) => (
            <li key={link.name}>
              <Link href={`/${link.name}`}>
                {link.name}
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
/* mongodb */
