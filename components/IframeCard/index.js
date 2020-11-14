import React from "react";
import "./style.css";
// import IFrameContext from "../../utils/"

// Exporting the Card Body, Card Image, and Card Overlay components from this file

function IframeCard({ app_url }) {
  return (
    <div className="iframe-card">
      <iframe
        id="iframe Container"
        title="iframe"
        width="100%"
        height="100%"
        src={app_url}
      ></iframe>
    </div>
  );
}

export default IframeCard;
