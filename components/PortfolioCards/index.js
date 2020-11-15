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
      `}</style>
      <section>
        <Button.Group fluid>
          <Button
            color="black"
            as="a"
            href={siteSrc}
            rel="noopener noreferrer"
            target="_blank"
            animated="fade"
          >
            <Button.Content children="See Site" visible />
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
            <Button.Content children="Open Code" visible />
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
        src: `./images/${project.img_src || "defaultimage01.jpg"}`,
        alt: `Screenshot of content from ${project.title}'s site`,
        size: "medium",
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
