import React from 'react';
import Link from '../ActiveLink';
import Styles from './NavMenu.module.css';

function Nav() {
  return (
    <nav className={Styles.topNavMenu} id="topNavMenu">
      <span className={Styles.brandName}>grv </span>
      <span className={Styles.navDivider} />
      <span>
        <Link activeClassName="active"  href="/">
          <a className={Styles.navMenuLinks}>home</a>
        </Link>
      </span>
      <span className={Styles.navDivider} />
      <span>
        <Link activeClassName="active"  href="/portfolio">
          <a className={Styles.navMenuLinks}>portfolio</a>
        </Link>
      </span>
      <span className={Styles.navDivider} />
      <span>
        <Link activeClassName="active"  href="/contact">
          <a className={Styles.navMenuLinks}>contact</a>
        </Link>
      </span>
      <span className={Styles.navDivider} />
      <span>
        <Link activeClassName="active"  href="/video">
          <a className={Styles.navMenuLinks}>video</a>
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
