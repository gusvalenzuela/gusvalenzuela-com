/* eslint-disable max-len */
import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import Head from 'next/head';
import Image from 'next/image';
import MyHeader from '../components/Head';
import About from '../components/About';
import Parallax from '../components/Parallax';
import ContactForm from '../components/ContactForm';
import YouTubePlayer from '../components/YouTubePlayer';
import EllisonAvatar from '../public/images/ellison-avatar.jpg';
import Styles from '../styles/index.module.css';
import 'lazysizes';

const APODQ = process.env.NEXT_PUBLIC_APODQ;

const Homepage = () => {
  const [NASAImage, setNASAImage]: any = useState({});
  const [imageRefreshing, setImageRefreshing] = useState(false);

  const getNasaImage = async () => {
    setImageRefreshing(true);

    const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
    const randomNum = Math.floor(Math.random() * yearInMilliseconds);
    // random date between now and a year ago
    const randomDate = new Date(Date.now() - randomNum);
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${APODQ}&hd=true&date=${
        randomDate.toISOString().split('T')[0]
      }`,
    ).then((r) => r.json());

    if (data) setImageRefreshing(false);

    setNASAImage(data);
  };

  return (
    <>
      <Head>
        <title>grv.Home</title>
        {/* custom google fonts for header and others on index page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&amp;family=Montserrat&amp;family=Open+Sans&amp;family=Poiret+One&amp;family=Roboto&amp;family=Special+Elite&amp;display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Gus Valenzuela's personal website displaying different web development skills and various links to other pages on the site."
        />
      </Head>
      <MyHeader textContent="HOME" />
      <main className={Styles.homepageContainer} id="homepage-container">
        {/* P A R A L L A X */}
        <Parallax backgroundImg={NASAImage} foregroundImg={{}} middleImg={{}} />
        <div className={Styles.nasaImageContent}>
          <h2>{NASAImage.title}</h2>
          <h5>
            {NASAImage.copyright && (
              <>
                <b>Copyright:</b> {NASAImage.copyright}
              </>
            )}
          </h5>

          {!NASAImage.url ? (
            <p>
              <a role="button" tabIndex={0} onClick={() => getNasaImage()}>
                {' '}
                {!imageRefreshing ? 'Click here' : 'Fetching new image.'}
              </a>{' '}
              to change the background image of the header above.
            </p>
          ) : (
            <>
              <p>
                Image taken from{' '}
                <a
                  href="https://apod.nasa.gov/apod/astropix.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NASA&apos;s Image of the Day
                </a>
              </p>
              <button type="button" onClick={() => getNasaImage()}>
                {' '}
                {!imageRefreshing ? 'Change again' : 'Fetching new image.'}
              </button>{' '}
              or{' '}
              <button type="button" onClick={() => setNASAImage({})}>
                {' '}
                Return to default
              </button>
            </>
          )}
        </div>
        <div className={Styles.bioContainer}>
          <About />
        </div>
        <div className={Styles.skillsbox} id="skillsbox">
          <div>
            <Segment inverted style={{ textAlign: 'right', height: '100%' }}>
              <p>Technical Skills and Experience</p>
            </Segment>
          </div>
          <div>
            <Segment vertical>
              <b>FRONT END</b>: HTML5, CSS3, Bootstrap, React, Semantic-UI,
              NextJS, Svelte, Handlebars
            </Segment>
            <Segment vertical>
              <b>BACK END</b>: Node, MySQL, MongoDB, Express, Mongoose,
              Sequelize
            </Segment>
            <Segment vertical>
              <b>OTHER</b>: JavaScript, TypeScript, Git, GitHub, JSON, MVC, REST
              APIs, UI/UX, Webpack, ESLint, Prettier, Excel, Word, Outlook,
              Windows, Linux, Raspberry Pi, and more.
            </Segment>
          </div>
        </div>
        <div className={Styles.videoPlayerBox}>
          <h2>Video Editing</h2>
          <YouTubePlayer videoId="tx2ci54WZJ0" />
          <br />
          <h3>
            <a
              href="https://www.youtube.com/channel/UCVLkTnKT6LAdpFWKyHIfm5w"
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              See more on my YouTube channel
            </a>
          </h3>
        </div>
        <div className={Styles.contactContainer}>
          <ContactForm />
        </div>
        <div className={Styles.quotebox}>
          <div>
            <Segment className={Styles.indexQuoteblockVerticalQuote}>
              <p>
                &quot;And remember, the world is possibility{' '}
                <i>
                  <b>[sic]</b>
                </i>{' '}
                if only you&apos;ll discover it.&quot;{' '}
              </p>
            </Segment>
            <div className={Styles.indexQuoteblockVerticalPerson}>
              <Image
                className={Styles.indexQuoteblockVerticalAvatar}
                // data-src="/images/ellison-avatar.jpg"
                src={EllisonAvatar}
                alt=""
              />
              <div>
                <p className={Styles.indexQuoteblockVerticalName}>
                  Ralph Ellison
                </p>
                <p className={Styles.indexQuoteblockVerticalInfo}>
                  Invisible Man
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
