import React from 'react';
import Head from 'next/head';
// import MyHeader from '../components/Head';
import YouTubePlayer from '../components/YouTubePlayer';
// import 'lazysizes';

function VideoPage() {
  return (
    <>
      <Head>
        <title>grv.Videos</title>
      </Head>
      <style>{`
        #videos-intro-para,
        #videos-container {
          padding: 2.25rem 1.5rem;
          margin: auto;
          width: 100%;
          max-width: 600px;
        }
      `}</style>
      {/* <MyHeader textContent="VIDEOS" /> */}
      <main>
        <p id="videos-intro-para">
          Besides web development I also spend some of my free time editing
          videos. Below are a few videos I have created over the years. Main
          software of choice is the wonderful and free{' '}
          <a
            href="https://fxhome.com/product/hitfilm-express"
            rel="noreferrer"
            target="_blank"
          >
            Hitfilm Express
          </a>{' '}
          . I am able to add visual fx, manipulate audio, create smooth
          transitions, and much more bringing my family vacations to life!
        </p>
        <div id="videos-container">
          <h4>2018 Horus&apos; Birthday Weekend</h4>
          <YouTubePlayer videoId="4Nn0NWQK3xY" />
          <h4>2018 Mexican-Caribbean Cruise</h4>
          <YouTubePlayer videoId="hQiJCL2-3y0" />
          <h4>2017 Alaskan Cruise </h4>
          <YouTubePlayer videoId="-Dbnitma83I" />
          <h4>2017 O&apos;ahu Hawaiian Vacation </h4>
          <YouTubePlayer videoId="tx2ci54WZJ0" />
          <h4>2016 Caribbean (Carnival) Cruise </h4>
          <YouTubePlayer videoId="OVn-3RzjWus" />
        </div>
      </main>
    </>
  );
}

export default VideoPage;
