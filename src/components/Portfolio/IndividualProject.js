import React, { useState } from 'react';
import { PortfolioProject, PortfolioProjectDescription } from './styled';
import Github from '../Icons/Github';

function IndividualProject({ project }) {
  const [expanded, setExpanded] = useState(false);

  console.log(project);

  return (
    <PortfolioProject key={project.name} expanded={expanded}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {project.name}
      </a>
      <p className="expander" onClick={() => setExpanded(!expanded)}>
        <strong>
          {expanded ? 'Collapse' : 'Expand'} Description <span>▲</span>
        </strong>
      </p>
      <PortfolioProjectDescription expanded={expanded}>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
      </PortfolioProjectDescription>
      <p>{project.tech}</p>
      {project.repo ? (
        <p className="repo">
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Github />
            Github Repo
          </a>
        </p>
      ) : null}
    </PortfolioProject>
  );
}

export default IndividualProject;
