import React, { useState } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
import API from '../utils/API';

const Style = () => (
  <style>{`
    .contactForm {
      margin: auto;
      padding: 3.375rem 1rem;
      width: 75%;
      text-align: left;
    }
    .contactForm .input {
      box-shadow: 1px 1px #02020233 inset !important;
    }
    .contactForm label {
      font-size: 1.1rem !important;
    }
    .contactContainer {
      background: var(--color-white) !important;
      color: var(--main-black) !important;
      /* height: 100% !important; */
    }
    .displayError {
      border: 1px var(--main-red) solid !important;
      transition: ease-out 1.25s;
    }

    /* small screens  */
    @media screen and (max-width: 576px) {
      .contactForm {
        width: 90%;
      }
    }

    /* over 1300px  */
    @media screen and (min-width: 1300px) {
      .contactForm {
        width: 800px;
      }
    }
  `}</style>
);

const ContactForm = () => {
  // document.title = `grv.Contact`;
  const emailDefault = {
    name: '',
    email: '',
    message: '',
    success: false,
    btnMsg: 'Send',
    attempts: 0,
    sending: false,
  };
  const [emailData, setEmailData] = useState(emailDefault);

  async function handleFormSubmission(event: { preventDefault: () => void }) {
    event.preventDefault();

    // name & email is "required"
    if ((emailData.name?.trim() && emailData.email?.trim()) !== '') {
      setEmailData({ ...emailData, btnMsg: 'Sending...', sending: true });

      API.sendContactEmail(emailData).then((res) => {
        if (res.message === `success`) {
          setEmailData({ ...emailData, success: true, btnMsg: 'Sent' });
        } else {
          setEmailData({ ...emailData, success: false, btnMsg: 'Fail' });
        }

        // after 7 secs, form data and message/toast is cleared
        setTimeout(() => {
          setEmailData(emailDefault);
        }, 7000);
      });
    } else {
      // keep count of attempts at sending without populating required fields
      // used in displaying error border around field(s)
      setEmailData({ ...emailData, attempts: emailData.attempts + 1 });

      // clearing attempts after 5 secs (removing error border)
      setTimeout(() => {
        setEmailData({ ...emailData, attempts: 0 });
      }, 5000);
    }
    return () => {};
  }

  return (
    <>
      <Style />
      <Form action="#" className="contactForm" id="contact-form">
        <h2>Send me an email:</h2>
        <Form.Field>
          <label htmlFor="#name">
            Name <span style={{ color: '#ff0000ff', fontWeight: 600 }}>*</span>
            <span style={{ float: 'right' }}>* Required Fields</span>
            <input
              className={`input ${
                emailData.name === '' && emailData.attempts > 0
                  ? 'displayError'
                  : ''
              }`}
              id="name"
              name="name"
              type="text"
              placeholder="Obi Wan Kenobi"
              onChange={(e) =>
                setEmailData({ ...emailData, name: e.target.value })
              }
              value={emailData.name}
              required
            />
          </label>
          <Label
            style={{
              display: `${
                emailData.name === '' && emailData.attempts > 0 ? '' : 'none'
              }`,
            }}
            pointing
            prompt
          >
            Please enter a name
          </Label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="#email">
            Email <span style={{ color: '#ff0000ff', fontWeight: 600 }}>*</span>
            <input
              className={`input ${
                emailData.email === '' && emailData.attempts > 0
                  ? 'displayError'
                  : ''
              }`}
              id="email"
              name="email"
              type="email"
              placeholder="MasterOWB@jediorder.com"
              onChange={(e) =>
                setEmailData({ ...emailData, email: e.target.value })
              }
              value={emailData.email}
              required
            />
          </label>
          <Label
            style={{
              display: `${
                emailData.email === '' && emailData.attempts > 0 ? '' : 'none'
              }`,
            }}
            pointing
            prompt
          >
            Please enter an email address
          </Label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="#message">
            Message
            <textarea
              className="input"
              id="message"
              name="message"
              maxLength={4096}
              placeholder="Hello there!"
              onChange={(e) =>
                setEmailData({ ...emailData, message: e.target.value })
              }
              value={emailData.message}
            />
          </label>
        </Form.Field>
        <div style={{ display: 'flow-root' }}>
          <div
            style={{
              display: `${!emailData.success ? 'none' : ''}`,
              padding: '1rem',
              textAlign: 'center',
              color: '#ff0000',
              fontWeight: 800,
            }}
          >
            <p>Thank you{`, ${emailData.name}`}! Message successfully sent.</p>
          </div>
          <Button
            className="send-button"
            type="submit"
            secondary
            content={emailData.btnMsg}
            onClick={handleFormSubmission}
            style={{ float: 'right', width: 'auto', padding: '1rem 2rem' }}
            disabled={emailData.sending}
          />
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
