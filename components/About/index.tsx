import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfilePhoto from '../../public/images/profilephoto3.jpg';
import Styles from './About.module.css';
import 'lazysizes';

const AboutPage = () => (
  <section id="aboutme-container">
    <div className={Styles.introParaRow}>
      <div id="about-me">
        <header className={Styles.welcomeHeader}>Welcome to my site.</header>
        <div className={Styles.profilePhoto}>
          <Image src={ProfilePhoto} alt="Headshot of myself (gus)" />
        </div>
        <p>
          Since an adolescent, I have been fascinated with technology,
          computers, and the world wide web. I made static webpages in my youth
          and even got to deploy some flash-centric wonders. Over the years my
          love of technology and computers only grew more powerful -
          occasionally doing activities on FreeCodeCamp and taking computer
          science courses at the local community college. Most recently I
          completed a Coding Bootcamp, by Trilogy/UC Davis Continuing Education,
          earning a certificate in Full Stack Web Development. I hope to
          continue to grow as a web developer and as a person.
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
  </section>
);

export default AboutPage;
