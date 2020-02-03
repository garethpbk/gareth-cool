import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import ProjectEntry from './ProjectEntry';

// import image components
import { NineLives } from '../Images';

const personalImages = {
  NineLives,
};

const Personal = () => {
  const data = useStaticQuery(graphql`
    query {
      allPersonalProjectsJson {
        nodes {
          name
          link
          description
          tech
          image
        }
      }
    }
  `);

  const project = data.allPersonalProjectsJson.nodes[0];

  return (
    <ProjectEntry
      name={project.name}
      link={project.link}
      description={project.description}
      tech={project.tech}
      Image={personalImages[project.image]}
    />
  );
};

export default Personal;
