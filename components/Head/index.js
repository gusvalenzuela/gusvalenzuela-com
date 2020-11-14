import React from "react";
import Styles from  "./Head.module.css";

function Head({ textContent }) {
  return (
    <header className={Styles.head}>
      <h1 style={{ margin: 0, paddingBottom: "1rem" }}>{textContent}</h1>
    </header>
  );
}

export default Head;
