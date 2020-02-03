import React from 'react';
import { Link } from 'gatsby';

// import styled components
import { ProjectEntryWrapper } from './styled';

const ProjectEntry = ({ name, link, description, tech, Image }) => {
  return (
    <ProjectEntryWrapper>
      <Link to="">
        <Image />
        <h2>{name}</h2>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Link to="">View Project ⮞</Link>
    </ProjectEntryWrapper>
  );
};

export default ProjectEntry;
