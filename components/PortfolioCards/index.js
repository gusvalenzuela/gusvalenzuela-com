import React from "react";
import { Item, Icon, Button } from "semantic-ui-react";
import Styles from "./PortfolioCards.module.css";
import "lazysizes";
function ProjectsExtraContent({ siteSrc, repoSrc }) {
  return (
    <>
      <style jsx>{`
        section {
          margin-top: 2.25rem;
          max-width: fit-content;
        }
        @media screen and (max-width: 768px) {
          section {
            margin: 1.5rem auto 2.25rem;
          }
        }
      `}</style>
      <section>
        <Button.Group size="tiny" fluid>
          <Button
            color="black"
            as="a"
            href={siteSrc}
            rel="noopener noreferrer"
            target="_blank"
            animated="fade"
          >
            <Button.Content children="OPEN SITE" visible />
            <Button.Content
              children={<Icon name="long arrow alternate right" />}
              hidden
            />
          </Button>
          <Button.Or />
          <Button
            color="red"
            inverted
            as="a"
            href={repoSrc}
            rel="noopener noreferrer"
            target="_blank"
            animated="fade"
          >
            <Button.Content children="VIEW CODE" visible />
            <Button.Content children={<Icon name="github" />} hidden />
          </Button>
        </Button.Group>
      </section>
    </>
  );
}

function PortfolioCards({ projects }) {
  let items = [];
  // extract the correct information needed to go in item.group of semantic UI (see sample below)
  items = projects.map((project, index) => {
    return {
      childKey: index,
      image: {
        size: "medium",
        content: (
          <>
            <img
              src={`./images/${project.img_src || "defaultimage01.jpg"}`}
              alt={`Screenshot of content from ${project.title}'s site`}
            ></img>
            <div className={`${Styles.overlay} ${Styles.overlayBottom}`}>
              <a
                href={project.app_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.app_url.split("://")[1]}
              </a>
            </div>
          </>
        ),
        className: Styles.portfolioImage,
      },
      header: project.title || "Project Title",
      description: project.lead || "Project Description",
      meta: project.technologies || "Tech Used",
      extra:
        (
          <ProjectsExtraContent
            siteSrc={project.app_url}
            repoSrc={project.repo_url}
          />
        ) || "",
    };
  });
  /* 
    Item.Group's items =  Shorthand array of props for Item
    sample Item: 
    {
        childKey: 0,
        image: '/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
    },
  */
  return <Item.Group divided relaxed="very" items={items} />;
}

export default PortfolioCards;
