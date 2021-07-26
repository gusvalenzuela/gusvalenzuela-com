import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MyHeader from '../components/Head';
import Styles from '../styles/aboutme.module.css';
import 'lazysizes';

const AboutPage = () => (
  <>
    <Head>
      <title>grv.About</title>
    </Head>
    <MyHeader textContent="ABOUT ME" />
    <main className={Styles.aboutmeContainer} id="aboutme-container">
      <div className={Styles.introParaRow}>
        <div id="about-me">
          <header className={Styles.welcomeHeader}>Welcome to my site.</header>
          <img
            // data-src="/images/profilephoto3.jpg"
            src="/images/profilephoto3.jpg"
            alt="Headshot of myself (gus)"
            className={Styles.profilePhoto}
          />
          <p>
            Since an adolescent, I have been fascinated with technology,
            computers, and the world wide web. I made static webpages in my
            youth and even got to deploy some flash-centric wonders. Over the
            years my love of technology and computers only grew more powerful -
            occasionally doing activities on FreeCodeCamp and taking computer
            science courses at the local community college. Most recently I
            completed a Coding Bootcamp, by Trilogy/UC Davis Continuing
            Education, earning a certificate in Full Stack Web Development. I
            hope to continue to grow as a web developer and as a person.
          </p>
          <p>
            Please take a look around my{' '}
            <Link href="/portfolio">
              <a className="text-link">portfolio</a>
            </Link>{' '}
            and if maybe you like what you see head over to my{' '}
            <Link href="/contact">
              <a className="text-link">contact</a>
            </Link>{' '}
            page And shoot me an email. Hope to hear from you! Have a wonderful
            day =]
          </p>
        </div>
      </div>
    </main>
  </>
);

export default AboutPage;
