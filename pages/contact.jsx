import React from 'react';
import Head from 'next/head';
import {Button} from 'semantic-ui-react';
import ContactForm from '../components/ContactForm';
// import MyHeader from '../components/Head';

function Contact() {
  return (
    <>
      <Head>
        <title>grv.Contact</title>
      </Head>
      {/* <MyHeader textContent="CONTACT" /> */}
      <style jsx>
        {`
          .contactContainer {
            background: var(--color-white) !important;
            color: var(--main-black) !important;
            /* height: 100% !important; */
          }
        `}
      </style>
      <main className="contactContainer" id="contact-container">
        <section style={{textAlign: 'center', margin: '2.25rem 0'}}>
          <ContactForm />
          <p>Alternatively,</p>
          <div className="contact-page-icons">
            <Button
              as="a"
              href="https://github.com/gusvalenzuela"
              target="_blank"
              rel="noopener noreferrer"
              circular
              color="black"
              icon="github"
            />
            <Button
              as="a"
              href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
              target="_blank"
              rel="noopener noreferrer"
              circular
              color="linkedin"
              icon="linkedin"
            />
            <Button
              as="a"
              href="mailto:gusrvalenzuela@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              circular
              color="red"
              icon="envelope"
            />
            <Button
              as="a"
              href="https://twitter.com/vrsulo"
              target="_blank"
              rel="noopener noreferrer"
              circular
              color="twitter"
              icon="twitter"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
