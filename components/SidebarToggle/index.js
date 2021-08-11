import React from 'react';
import Styles from './SidebarToggle.module.css';

function SidebarToggle({ isOpen, handleOpeningSidebar, smallScreen }) {
  return (
    <button
      type="button"
      aria-label="Toggle Sidebar"
      className={`${Styles.sidebarToggle} ${
        !isOpen ? Styles.sidebarClosed : Styles.sidebarOpened
      } ${smallScreen ? Styles.smallScreen : ''}`}
      onClick={handleOpeningSidebar}
    />
  );
}

export default SidebarToggle;
