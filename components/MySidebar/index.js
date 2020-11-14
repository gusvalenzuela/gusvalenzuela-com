import React, { useEffect, useState } from "react";
import Sidebar from "react-sidebar";
import Nav from "../Nav";
import SidebarToggle from "../SidebarToggle";
import Store from "../../stores/global";

function MySidebar({ children }) {
  const viewportMin = window.matchMedia(`(min-width: 768px)`);
  const [sideNavOpen, setSideNavOpen] = useState(viewportMin.matches);
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isSmallScreen: undefined,
  });
  const listener = () => {
    Store.setState({ windowWidth: window.innerWidth });
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
      isSmallScreen: !viewportMin.matches ? true : false,
    });
    setSideNavOpen(viewportMin.matches);
  };

  useEffect(() => {
    window.addEventListener("resize", listener);
  }, []);

  function handleOpeningSidebar() {
    if (!sideNavOpen) {
      setSideNavOpen(true);
    } else {
      setSideNavOpen(false);
    }
  }

  return (
    <Sidebar
      sidebar={<Nav />}
      open={screen.isSmallScreen ? sideNavOpen : false}
      onSetOpen={handleOpeningSidebar}
      docked={screen.isSmallScreen ? false : sideNavOpen}
      pullRight={true}
      styles={{ sidebar: { background: "#eeeeee" } }}
    >
      {children}
      <SidebarToggle
        isOpen={sideNavOpen}
        smallScreen={screen.isSmallScreen}
        handleOpeningSidebar={() => handleOpeningSidebar()}
      />
    </Sidebar>
  );
}

export default MySidebar;
