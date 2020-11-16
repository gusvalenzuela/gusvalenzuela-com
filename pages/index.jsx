import React, { useEffect, useState } from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import Head from "next/head";
import Link from "next/link";
import MyHeader from "../components/Head";
import Styles from "../styles/index.module.css";
import "lazysizes";
const APODQ = process.env.NEXT_PUBLIC_APODQ;

const Homepage = () => {
  const [NASAImage, setNASAImage] = useState({});
  const [imageRefreshing, setImageRefreshing] = useState(false);
  const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
  var randomNum = Math.floor(Math.random() * yearInMilliseconds);
  const randomDate = new Date(Date.now() - randomNum); // random date between now and a year ago

  const getNasaImage = async () => {
    setImageRefreshing(true);
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${APODQ}&hd=true&date=${
        randomDate.toISOString().split("T")[0]
      }`
    ).then((r) => r.json());

    if (data) setImageRefreshing(false);
    setNASAImage(data);
  };
  // on document load/change
  useEffect(() => {
    getNasaImage();
  }, [document]);
  return (
    <>
      <Head>
        <title>grv.Home</title>
        {/* custom google fonts for header and others on index page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&amp;family=Montserrat&amp;family=Open+Sans&amp;family=Poiret+One&amp;family=Roboto&amp;family=Special+Elite&amp;display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="Gus Valenzuela's personal website displaying different web development skills and various links to other pages on the site."
        ></meta>
      </Head>
      <MyHeader textContent="HOME" />
      <main className={Styles.homepageContainer} id="homepage-container">
        {/* P A R A L L A X */}
        <div className={Styles.calloutIndex} id="callout">
          <div
            className={Styles.background}
            // style={{ backgroundImage: `url(${NASAImage.url})` }}
          >
            <img
              src={NASAImage.hdurl}
              alt={NASAImage.title}
              name={NASAImage.title}
              title={NASAImage.explanation}
            />
          </div>
          <div className={Styles.foreground}>
            <div>
              <p className={Styles.headerIndex} id="header">
                Gus <br />
                Valenzuela
              </p>
              <p className={Styles.subheaderIndex} id="subheader">
                At your service.
              </p>
            </div>
            <div>
              <Link href="/portfolio" passHref>
                <Button color="red" animated>
                  <Button.Content visible>Portfolio</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/contact" passHref>
                <Button color="red" animated>
                  <Button.Content visible>Contact</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={Styles.nasaImageContent}>
          <h2>{NASAImage.title}</h2>
          <h5>
            {NASAImage.copyright && (
              <>
                <b>Copyright:</b> {NASAImage.copyright}
              </>
            )}
          </h5>
          <p>
            The image above is from{" "}
            <a
              href="https://apod.nasa.gov/apod/astropix.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA's Image of the Day
            </a>
            , fetched at random on each page load.
            <a onClick={getNasaImage}>
              {" "}
              {!imageRefreshing ? "Refresh the image." : "Fetching new image."}
            </a>
          </p>
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
