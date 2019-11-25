import React from 'react';
import { Link } from 'gatsby';

import IndividualProject from './IndividualProject';

// import styled components
import { Container } from '../styled';
import { PortfolioContent, PortfolioWrapper } from './styled';

function Portfolio({
  projects: {
    allPersonalProjectsJson,
    allPresentationsJson,
    allProfessionalProjectsJson,
  },
}) {
  return (
    <PortfolioWrapper id="projects">
      <h2>I'm Gareth and here's some stuff I made!</h2>
      <p>(working on making this site look pretty bear with me ty)</p>
      <h3>
        you can also <Link to="/blog">check out my blog posts</Link>,{' '}
        <Link to="/about">learn more about me</Link>, or{' '}
        <Link to="/contact">contact me!</Link>
      </h3>
      <Container>
        <PortfolioContent>
          <div>
            <h4>Professional Work</h4>
            <p>
              Not listed: non-public work that I can't put here (but would love
              to talk about). All repos for professional work private :(
            </p>
            {allProfessionalProjectsJson.nodes.map(project => (
              <IndividualProject key={project.name} project={project} />
            ))}
          </div>
          <div>
            <h4>Personal Projects</h4>
            {allPersonalProjectsJson.nodes.map(project => (
              <IndividualProject key={project.name} project={project} />
            ))}
          </div>
          <div>
            <h4>Presentations</h4>
            {allPresentationsJson.nodes.map(project => (
              <IndividualProject key={project.name} project={project} />
            ))}
          </div>
        </PortfolioContent>
      </Container>
    </PortfolioWrapper>
  );
}

export default Portfolio;
