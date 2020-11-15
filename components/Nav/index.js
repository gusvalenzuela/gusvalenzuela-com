import React from "react";
import Styles from "./Nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={Styles.sidenavbar} id="sidenavbar">
      <ul className={Styles.navbarNav}>
        <li>
          <Link href="/">
            <a className={Styles.navbarLinks}> home,</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={Styles.navbarLinks}> about,</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className={Styles.navbarLinks}> portfolio,</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={Styles.navbarLinks}> contact.</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
