import React, { useState } from 'react';

// import components
import Personal from './Personal';
import PortfolioTabs from './PortfolioTabs';
import Presentations from './Presentations';
import Professional from './Professional';
// import IndividualProject from './IndividualProject';

// import styled components
import { Container } from '../styled';
import { PortfolioContent, PortfolioWrapper } from './styled';

function renderActivePortfolioTab(activeTab) {
  switch (activeTab) {
    case 'professional':
      return <Professional />;
    case 'personal':
      return <Personal />;
    case 'presentations':
      return <Presentations />;
    case 'openSource':
      return <h2>TBD...</h2>;
    case 'pixels':
      return <h2>TBD...</h2>;
    default:
      return <Professional />;
  }
}

function Portfolio({
  projects: {
    allPersonalProjectsJson,
    allPresentationsJson,
    allProfessionalProjectsJson,
  },
}) {
  const [activeTab, setActiveTab] = useState('professional');

  return (
    <PortfolioWrapper id="projects">
      <h2>Here's some stuff I made!</h2>
      <Container>
        <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <PortfolioContent activeTab={activeTab}>
          {renderActivePortfolioTab(activeTab)}
          {/* <div>
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
          </div> */}
        </PortfolioContent>
      </Container>
    </PortfolioWrapper>
  );
}

export default Portfolio;
