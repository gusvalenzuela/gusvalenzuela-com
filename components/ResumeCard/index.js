import React from "react";
import ResumeModal from "../ResumeModal";
import { List } from "semantic-ui-react";
import Styles from "./ResumeCard.module.css";

function ResumeCard() {
  return (
    <div className={Styles.cardSemantic}>
      <h3>Want to reach me?</h3>

      <p>
        Use{" "}
        <a
          alt="Contact page"
          href="/contact/#contact-form"
          className="text-link"
        >
          this form
        </a>{" "}
        on my contact page or check out these other links:
      </p>
      <List divided relaxed="very">
        <List.Item>
          <List.Icon name="sticky note" size="large" verticalAlign="middle" />
          <List.Content>
            <ResumeModal
              Button={<List.Header as="a">Open Resume</List.Header>}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header
              alt="GitHub Profile"
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/gusvalenzuela"
            >
              GitHub Profile
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkedin" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header
              alt="LinkedIn Profile"
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
            >
              LinkedIn Profile
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon
            name="envelope outline"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header
              alt="Email gusrvalenzuela@gmail.com"
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:gusrvalenzuela@gmail.com"
            >
              gusrvalenzuela@gmail.com
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default ResumeCard;
