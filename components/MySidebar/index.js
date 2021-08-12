import React, { useEffect, useState } from 'react';
import Sidebar from 'react-sidebar';
import Nav from '../Nav';
import SidebarToggle from '../SidebarToggle';
import FixedBottomMenu from '../FixedBottomMenu';
import Store from '../../stores/global';

function MySidebar({ children }) {
  const viewportMin = window.matchMedia(`(min-width: 768px)`);
  const elementRef = React.useRef();
  // const mainState = useState(elementRef);
  const [sideNavOpen, setSideNavOpen] = useState(viewportMin.matches);
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isSmallScreen: undefined,
  });

  useEffect(() => {
    const resizeListener = () => {
      Store.setState({ windowWidth: window.innerWidth });
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        isSmallScreen: !viewportMin.matches,
      });
      setSideNavOpen(viewportMin.matches);
      return window.removeEventListener('resize', resizeListener);
    };

    window.addEventListener('resize', resizeListener);
  }, [viewportMin]);

  useEffect(() => {
    // set the ref as the 'main' element
    elementRef.current = [...document.getElementsByTagName('main')];
    // return out if no element(s) found
    if (!elementRef.current.length) {
      elementRef.current = null;
      return elementRef;
    }
    // Get the parent element of the main content element
    // this is the "sidebar" component that is scrollable
    const rootElement = elementRef.current[0]?.parentElement;

    if (!rootElement) return null;
    //  Get the sticky buttons menu
    const stickyMenu = document.getElementById('fixed-bottom-menu');
    const goToTopFunction = () => {
      rootElement.scrollTop = 0;
      return null;
    };

    const scrollFunction = () => {
      // When the user scrolls down 300px from the top of the document, show the menu
      stickyMenu.style.display = rootElement.scrollTop > 300 ? 'block' : 'none';
      return null;
    };
    // attach listener function to elements
    rootElement.onscroll = scrollFunction;
    stickyMenu.onclick = goToTopFunction;

    return () => {
      elementRef.current = null;
      rootElement.removeEventListener('scroll', scrollFunction);
      stickyMenu.removeEventListener('click', goToTopFunction);
    };
  }, [elementRef]);

  return (
    <Sidebar
      sidebar={<Nav />}
      open={screen.isSmallScreen ? sideNavOpen : false}
      onSetOpen={() => setSideNavOpen(!sideNavOpen)}
      docked={screen.isSmallScreen ? false : sideNavOpen}
      pullRight
      styles={{ sidebar: { background: '#eeeeee' } }}
    >
      {children}
      <SidebarToggle
        isOpen={sideNavOpen}
        smallScreen={screen.isSmallScreen}
        handleOpeningSidebar={() => setSideNavOpen(!sideNavOpen)}
      />
      <FixedBottomMenu />
    </Sidebar>
  );
}

export default MySidebar;
