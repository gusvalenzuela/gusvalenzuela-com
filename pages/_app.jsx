import React from "react";
import Moment from "react-moment";
import dynamic from "next/dynamic";
import Foot from "../components/Foot";
// import BottomChevron from "../components/BottomChevron";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

export default function MyApp({ Component, pageProps }) {
  // Start the pooled timer which runs every 60 seconds
  // (60000 milliseconds) by default.
  // more info: https://www.npmjs.com/package/react-moment#pooled-timer
  Moment.startPooledTimer();
  // we must dynamically load the component using Next's dynamic
  const Sidebar = dynamic(() => import("../components/MySidebar"), {
    // turn server-side render off in order to access the window obj in browser API
    ssr: false,
  });
  return (
    <div className="grid-root">
      <Sidebar>
        <Component {...pageProps} />
        <Foot />
        {/* <BottomChevron visible={true} /> */}
      </Sidebar>
    </div>
  );
}
