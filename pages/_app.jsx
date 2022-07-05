import React from 'react';
// import dynamic from 'next/dynamic';
import Foot from '../components/Foot';
import NavMenu from '../components/NavMenu';
// import BottomChevron from "../components/BottomChevron";
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

export default function MyApp({Component, pageProps}) {
  // we must dynamically load the component using Next's dynamic
  // const Sidebar = dynamic(() => import('../components/MySidebar'), {
  //   // turn server-side render off in order to access the window obj in browser API
  //   ssr: false,
  // });

  return (
    <div className="grid-root">
      {/* <Sidebar> */}
      <NavMenu />
      <Component {...pageProps} />
      <Foot />
      {/* <BottomChevron visible={true} /> */}
      {/* </Sidebar> */}
    </div>
  );
}
