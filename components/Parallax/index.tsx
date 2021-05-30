import React from 'react';
import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';
import Styles from './Parallax.module.css';

function Parallax({ backgroundImg, foregroundImg, middleImg }) {
  // requires one image for foreground and up to 2 more for middle and background.

  return (
    <div className={Styles.callout} id="callout">
      <div
        className={Styles.background}
        style={
          backgroundImg?.url && { backgroundImage: `url(${backgroundImg.url})` }
        }
      />
      {middleImg && (
        <div className={Styles.middle}>
          <img
            src={middleImg.url}
            alt={middleImg.title || ''}
            // name={middleImg.title}
            title={middleImg.explanation || 'unknown'}
          />
        </div>
      )}
      <div
        className={Styles.foreground}
        style={{ backgroundImage: `url(${foregroundImg?.url})` }}
      >
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
  );
}

export default Parallax;
