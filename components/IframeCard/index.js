import React from 'react';
import Styles from './IframeCard.module.css';
// import IFrameContext from "../../utils/"

// Exporting the Card Body, Card Image, and Card Overlay components from this file

function IframeCard({ appUrl }) {
  return (
    <div className={Styles.iframeCard}>
      <iframe
        id="iframe Container"
        title="iframe"
        width="100%"
        height="100%"
        src={appUrl}
      />
    </div>
  );
}

export default IframeCard;
