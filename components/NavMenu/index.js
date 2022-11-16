/* eslint-disable no-restricted-globals */
import React from 'react';
import {useRouter} from 'next/router';
import {Menu, Segment} from 'semantic-ui-react';
import Styles from './NavMenu.module.css';

function Nav() {
  const {push, pathname} = useRouter();

  const menuItem = React.useCallback(
    (pagename) => {
      const routeTo = (path) => {
        push(path);
      };

      return (
        <Menu.Item
          className={Styles.menuItem}
          active={pathname === `/${pagename}`}
          onClick={() => routeTo(`/${pagename}`)}
          link
        >
          {pagename || 'home'}
        </Menu.Item>
      );
    },

    [pathname, push],
  );

  return (
    <Segment.Group className={Styles.topNavMenu} id="topNavMenu">
      <Segment size="large" basic compact className={Styles.brandName}>
        grv
      </Segment>
      <Menu pointing inverted widths={4}>
        {menuItem('')}
        {menuItem('portfolio')}
        {menuItem('contact')}
        {menuItem('video')}
      </Menu>
    </Segment.Group>
  );
}

export default Nav;
