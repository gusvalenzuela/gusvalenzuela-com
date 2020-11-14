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
      <div className={Styles.homepageContainer} id="homepage-container">
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

        <div className={Styles.introParaRow}>
          <div id="about-me">
            <header className={Styles.welcomeHeader}>
              Welcome to my site.
            </header>
            <img
              // data-src="/images/profilephoto3.jpg"
              src="/images/profilephoto3.jpg"
              alt="Headshot of myself (gus)"
              className={Styles.profilePhoto}
            ></img>
            <p>
              Since an adolescent, I have been fascinated with technology,
              computers, and the world wide web. I made static webpages in my
              youth and even got to deploy some flash-centric wonders. Over the
              years my love of technology and computers only grew more powerful
              - occasionally doing activities on FreeCodeCamp and taking
              computer science courses at the local community college. Most
              recently I completed a Coding Bootcamp, by Trilogy/UC Davis
              Continuing Education, earning a certificate in Full Stack Web
              Development. I hope to continue to grow as a web developer and as
              a person.
            </p>
            <p>
              Please take a look around my{" "}
              <Link href="/portfolio">
                <a className="text-link">portfolio</a>
              </Link>{" "}
              and if maybe you like what you see head over to my{" "}
              <Link href="/contact">
                <a className="text-link">contact</a>
              </Link>{" "}
              page And shoot me an email. Hope to hear from you! Have a
              wonderful day =]
            </p>
          </div>
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
      </div>
    </>
  );
};

export default Homepage;
