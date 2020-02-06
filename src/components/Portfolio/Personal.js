import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import ProjectEntry from './ProjectEntry';

// import image components
import {
  Antediluvian,
  AwesomeAxes,
  GracePortfolio,
  GrinningMoon,
  NineLives,
  Stravisualize,
  TheRubyMouser,
} from '../Images';

const personalImages = {
  Antediluvian,
  AwesomeAxes,
  GracePortfolio,
  GrinningMoon,
  NineLives,
  Stravisualize,
  TheRubyMouser,
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

  return data.allPersonalProjectsJson.nodes.map(project => (
    <ProjectEntry
      key={project.name}
      name={project.name}
      link={project.link}
      description={project.description}
      tech={project.tech}
      Image={personalImages[project.image]}
    />
  ));
};

export default Personal;
