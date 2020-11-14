import React, { useState } from "react";
import Head from "next/head";
import { Form, Button, Label } from "semantic-ui-react";
import API from "../utils/API";
import MyHeader from "../components/Head";
import Styles from "../styles/contact.module.css";

function Contact() {
  // document.title = `grv.Contact`;
  const emailDefault = {
    name: "",
    email: "",
    message: "",
    success: "",
    btnMsg: "Send",
    attempts: 0,
  };
  const [emailData, setEmailData] = useState(emailDefault);

  function handleFormSubmission(event) {
    event.preventDefault();

    // name & email is "required"
    if ((emailData.name.trim() && emailData.email.trim()) !== "") {
      setEmailData({ ...emailData, btnMsg: "Sending..." });

      API.sendContactEmail(emailData).then((res) => {
        if ((res.data = `success`)) {
          setEmailData({ ...emailData, success: true, btnMsg: "Sent" });
        } else {
          setEmailData({ ...emailData, success: false, btnMsg: "Fail" });
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
      }, 2000);
    }
  }
  return (
    <>
      <Head>
        <title>grv.Contact</title>
      </Head>
      <MyHeader textContent="CONTACT" />
      <main className={Styles.contactContainer} id="contact-container">
        <Form action="#" className={Styles.contactForm} id="contact-form">
          <h2>Send an email:</h2>
          <Form.Field>
            <label>
              Name{" "}
              <span style={{ color: "#ff0000ff", fontWeight: "600" }}>*</span>
              <span style={{ float: "right" }}>* Required Fields</span>
            </label>
            <input
              className={`input ${
                emailData.name === "" && emailData.attempts > 0
                  ? Styles.displayError
                  : ""
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
            <Label
              style={{
                display: `${
                  emailData.name === "" && emailData.attempts > 0 ? "" : "none"
                }`,
              }}
              pointing
              prompt
            >
              Please enter a name
            </Label>
          </Form.Field>
          <Form.Field>
            <label>
              Email{" "}
              <span style={{ color: "#ff0000ff", fontWeight: "600" }}>*</span>
            </label>
            <input
              className={`input ${
                emailData.email === "" && emailData.attempts > 0
                  ? Styles.displayError
                  : ""
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
            <Label
              style={{
                display: `${
                  emailData.email === "" && emailData.attempts > 0 ? "" : "none"
                }`,
              }}
              pointing
              prompt
            >
              Please enter an email address
            </Label>
          </Form.Field>
          <Form.Field>
            <label>Message</label>
            <textarea
              className={Styles.input}
              id="message"
              name="message"
              type="text"
              maxLength="4096"
              placeholder="Hello there!"
              onChange={(e) =>
                setEmailData({ ...emailData, message: e.target.value })
              }
              value={emailData.message}
            />
          </Form.Field>
          <div style={{ display: "flow-root" }}>
            <div
              style={{
                display: `${!emailData.success ? "none" : ""}`,
                padding: "1rem",
                textAlign: "center",
                color: "#ff0000",
                fontWeight: "800",
              }}
            >
              <p>
                Thank you{`, ${emailData.name}`}! Message successfully sent.
              </p>
            </div>
            <Button
              className="send-button"
              type="submit"
              secondary
              content={"Coming Soon" || emailData.btnMsg}
              onClick={handleFormSubmission}
              style={{ float: "right", width: "auto", padding: "1rem 2rem" }}
              disabled
            />
          </div>
        </Form>
        <section style={{ textAlign: "center", margin: "2.25rem 0" }}>
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
