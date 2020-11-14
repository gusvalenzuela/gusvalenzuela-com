import React from "react";
import { Item } from "semantic-ui-react";
// import Styles from "./Card.module.css";
import "lazysizes";

function PortfolioCards({ projects }) {
  let items = [];
  // extract the correct information needed to go in item.group of semantic UI (see sample below)
  items = projects.map((project, index) => {
    return {
      childKey: index,
      image: `./images/${project.img_src || "defaultimage01.jpg"}`,
      header: project.title || "Project Title",
      description: project.lead || "Project Description",
      meta: project.technologies || "Tech Used",
      //   extra: "Extra",
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
  return <Item.Group items={items} />;
}

export default PortfolioCards;
