import React from 'react';
import Styles from './index.module.css';

const FixedBottomMenu = () => (
  <button
    type="button"
    aria-label="Back to Top"
    id="fixed-bottom-menu"
    className={Styles.fixedBottomMenu}
  >
    <span role="img" aria-label="Arrow pointing up with text reading 'Top'">
      🔝
    </span>
  </button>
);

export default FixedBottomMenu;
