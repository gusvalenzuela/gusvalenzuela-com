import React from "react";
import { Segment, Button } from "semantic-ui-react";
import Head from "next/head";
import Link from "next/link";
import MyHeader from "../components/Head";
import Styles from "../styles/index.module.css";
import "lazysizes";

const Homepage = () => {
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
        <div className={Styles.calloutIndex} id="callout">
          <div className={Styles.topBarCustom}>
            <p className={Styles.headerIndex} id="header">
              Gus Valenzuela
            </p>
            <p className={Styles.subheaderIndex} id="subheader">
              A responsive web developer for the modern world.
            </p>
            <div className={Styles.homepageHeaderBtns}>
              <Button.Group size={"medium"}>
                <Link href="/portfolio" passHref>
                  <Button children="Portfolio" color="red" as="a" />
                </Link>
                <Button.Or text="" />
                <Link href="/contact" passHref>
                  <Button children="Contact" inverted color="red" as="a" />
                </Link>
              </Button.Group>
            </div>
          </div>
        </div>
        <div className={Styles.buttonsContainer}>
          <Link href="/about" passHref>
            <Button color="red" inverted size="massive" fluid animated="fade">
              <Button.Content visible>READ ABOUT ME</Button.Content>
              <Button.Content hidden>Let's Go!</Button.Content>
            </Button>
          </Link>
        </div>
        <div className={Styles.skillsbox}>
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
