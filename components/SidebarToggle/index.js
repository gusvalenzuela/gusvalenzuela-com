import React from "react";
import Styles from "./SidebarToggle.module.css";

// This file exports the Input, TextArea, and FormBtn components

function SidebarToggle({ isOpen, handleOpeningSidebar, smallScreen }) {
  return (
    <button
      aria-label="Toggle Sidebar"
      className={`${Styles.sidebarToggle} ${
        !isOpen ? Styles.sidebarClosed : Styles.sidebarOpened
      } ${smallScreen && Styles.smallScreen}`}
      onClick={() => handleOpeningSidebar()}
    ></button>
  );
}

export default SidebarToggle;
