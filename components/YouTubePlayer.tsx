import React from 'react';

function YouTubeVideoPlayer({ videoId }) {
  return (
    <>
      <style jsx>{`
        .iframeContainer {
          overflow: hidden;
          /* 16:9 aspect ratio */
          padding-top: 56.25%;
          position: relative;
        }

        .iframeContainer iframe {
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}</style>
      <section className="iframeContainer">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default YouTubeVideoPlayer;
