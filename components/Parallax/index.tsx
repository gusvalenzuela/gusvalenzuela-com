import React from 'react';
import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';
import Styles from './index.module.css';

function Parallax({ backgroundImg, foregroundImg }) {
  // requires one image for foreground and up to 2 more for middle and background.

  return (
    <div
      className={Styles.parallax}
      style={
        backgroundImg?.url && {
          backgroundColor: 'var(--color4, black)',
          backgroundImage: `url(${backgroundImg.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }
      }
    >
      {/* <div className={Styles.background} />
      {middleImg && (
        <div className={Styles.middle}>
          <img
            src={middleImg.url}
            alt={middleImg.title || ''}
            // name={middleImg.title}
            title={middleImg.explanation || 'unknown'}
          />
        </div>
      )} */}
      <ul className={Styles.circles}>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <div
        className={Styles.foreground}
        style={{ backgroundImage: `url(${foregroundImg?.url})` }}
      >
        <div className={Styles.foregroundContent}>
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
    </div>
  );
}

export default Parallax;
