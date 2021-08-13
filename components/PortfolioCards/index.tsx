import React from 'react';
import { Item, Icon, Button, ItemProps } from 'semantic-ui-react';
import type { SemanticShorthandCollection } from 'semantic-ui-react/dist/commonjs/generic';
import type { GusProject } from '../../generic';
import 'lazysizes';

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
            <Button.Content visible>VISIT</Button.Content>
            <Button.Content hidden>
              <Icon name="long arrow alternate right" />
            </Button.Content>
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
            <Button.Content visible>VIEW CODE</Button.Content>
            <Button.Content hidden>
              <Icon name="github" />
            </Button.Content>
          </Button>
        </Button.Group>
      </section>
    </>
  );
}

function PortfolioCards({ projects }) {
  // extract the correct information needed to go in item.group of semantic UI (see sample below)
  const items: SemanticShorthandCollection<ItemProps> = projects.map(
    (project: GusProject) => ({
      childKey: project.title,
      image: {
        size: 'tiny',
        src: `./images/${project.img_src || 'defaultimage01.jpg'}`,
        // content: (
        //   <>
        //     <Image

        //       layout="fill"
        //       alt={`Screenshot of content from ${project.title}'s site`}
        //     />
        //     <div className={`${Styles.overlay} ${Styles.overlayBottom}`}>
        //       <a
        //         href={project.app_url}
        //         rel="noopener noreferrer"
        //         target="_blank"
        //       >
        //         {project.app_url.split('://')[1]}
        //       </a>
        //     </div>
        //   </>
        // ),
        // className: Styles.portfolioImage,
      },
      header: project.title || 'Project Title',
      description: project.lead || 'Project Description',
      meta: project.technologies || 'Tech Used',
      extra:
        (
          <ProjectsExtraContent
            siteSrc={project.app_url}
            repoSrc={project.repo_url}
          />
        ) || '',
    }),
  );
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
  return <Item.Group divided items={items} />;
}

export default PortfolioCards;
