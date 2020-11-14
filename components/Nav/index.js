import React from "react";
import Styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={Styles.sidenavbar} id="sidenavbar">
      <ul className={Styles.navbarNav}>
        <li>
          <a className={Styles.navbarLinks} href="/">
            home,
          </a>
        </li>
        <li>
          <a className={Styles.navbarLinks} href="/#about-me">
            about,
          </a>
        </li>
        <li>
          <a className={Styles.navbarLinks} href="/portfolio">
            portfolio,
          </a>
        </li>
        <li>
          <a className={Styles.navbarLinks} href="/contact">
            contact.
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
