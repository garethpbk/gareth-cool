import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import ProjectEntry from './ProjectEntry';

// import image components
import {
  ATalkAboutTalks,
  BetterContextWithHooks,
  Es6AndBeyond,
  StaySuaveWithStyledComponents,
} from '../Images';

const presentationsImages = {
  ATalkAboutTalks,
  BetterContextWithHooks,
  Es6AndBeyond,
  StaySuaveWithStyledComponents,
};

const Presentations = () => {
  const data = useStaticQuery(graphql`
    query {
      allPresentationsJson {
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

  return data.allPresentationsJson.nodes.map(project => (
    <ProjectEntry
      key={project.name}
      name={project.name}
      link={project.link}
      description={project.description}
      tech={project.tech}
      Image={presentationsImages[project.image]}
    />
  ));
};

export default Presentations;
