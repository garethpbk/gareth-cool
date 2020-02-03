import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import ProjectEntry from './ProjectEntry';

// import image components
import { ProfPortfolioLandingPages } from '../Images';

const professionalImages = {
  ProfPortfolioLandingPages,
};

const Professional = () => {
  const data = useStaticQuery(graphql`
    query {
      allProfessionalProjectsJson {
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

  const project = data.allProfessionalProjectsJson.nodes[0];

  return (
    <ProjectEntry
      name={project.name}
      link={project.link}
      description={project.description}
      tech={project.tech}
      Image={professionalImages[project.image]}
    />
  );
};

export default Professional;
