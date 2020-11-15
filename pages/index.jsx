import React from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import Head from "next/head";
import Link from "next/link";
import MyHeader from "../components/Head";
import Styles from "../styles/index.module.css";
import "lazysizes";

const Homepage = ({ NASAimage }) => {
  return (
    <>
      <Head>
        <title>grv.Home</title>
        {/* custom google fonts for header and others on index page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&amp;family=Montserrat&amp;family=Open+Sans&amp;family=Poiret+One&amp;family=Roboto&amp;family=Special+Elite&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <MyHeader textContent="HOME" />
      <main className={Styles.homepageContainer} id="homepage-container">
        {/* P A R A L L A X */}
        <div className={Styles.calloutIndex} id="callout">
          <div
            className={Styles.background}
            style={{ backgroundImage: `url(${NASAimage.hdurl})` }}
          >
            {/* <img
              src={NASAimage.hdurl}
              alt={NASAimage.title}
              name={NASAimage.title}
              title={NASAimage.explanation}
            /> */}
          </div>
          <div className={Styles.foreground}>
            <div>
              <p className={Styles.headerIndex} id="header">
                Gus Valenzuela
              </p>
              <p className={Styles.subheaderIndex} id="subheader">
                At your service.
              </p>
            </div>
            <div>
              <Link href="/portfolio" passHref>
                <Button fluid color="red" animated>
                  <Button.Content visible>Portfolio</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/contact" passHref>
                <Button fluid color="red" animated>
                  <Button.Content visible>Contact</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={Styles.buttonsContainer}>
          <Link href="/about" passHref>
            <Button color="red" inverted size="massive" fluid animated="fade">
              <Button.Content visible>ABOUT ME</Button.Content>
              <Button.Content hidden>Let's Go!</Button.Content>
            </Button>
          </Link>
        </div>
        <div className={Styles.skillsbox} id="skillsbox">
          <div>
            <Segment inverted style={{ textAlign: "right", height: "100%" }}>
              <p>Technical Skills and Experience</p>
            </Segment>
          </div>
          <div>
            <Segment vertical>
              <b>FRONT END</b>: HTML5, CSS3, Bootstrap, React, Semantic-UI
            </Segment>
            <Segment vertical>
              <b>BACK END</b>: Node, MySQL, MongoDB, Express, Mongoose,
              Sequelize
            </Segment>
            <Segment vertical>
              <b>OTHER</b>: JavaScript, Git, SQL, JSON, GitHub, MVC, AJAX,
              Handlebars, jQuery, REST, APIs, UI, OAuth2
            </Segment>
          </div>
        </div>
        <div className={Styles.quotebox}>
          <div>
            <Segment className={Styles.indexQuoteblockVerticalQuote}>
              <p>
                "And remember, the world is possibility{" "}
                <i>
                  <b>[sic]</b>
                </i>{" "}
                if only you'll discover it."{" "}
              </p>
            </Segment>
            <div className={Styles.indexQuoteblockVerticalPerson}>
              <img
                className={Styles.indexQuoteblockVerticalAvatar}
                // data-src="/images/ellison-avatar.jpg"
                src="/images/ellison-avatar.jpg"
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const APODQ = process.env.NEXT_PUBLIC_APODQ;
  const yearInMs = 1000 * 60 * 60 * 24 * 365;
  var randomNum = Math.floor(Math.random() * yearInMs);
  const randomDate = new Date(Date.now() - randomNum);
  // Call NASA API endpoint to get image of the day.
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${APODQ}&hd=true&date=${
      randomDate.toISOString().split("T")[0]
    }`
  );
  const NASAimage = await res.json();

  // By returning { props: NASAimage }, the Homepage component above
  // will receive `NASAimage` as a prop at build time
  return {
    props: {
      NASAimage,
    },
  };
}
