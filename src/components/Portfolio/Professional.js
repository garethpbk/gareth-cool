import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import ProjectEntry from './ProjectEntry';

// import image components
import {
  BranchSites,
  LoanforceInsider,
  MloSites,
  ProfPortfolioLandingPages,
  RecruitmentSite,
  SanctumTheme,
  VcuCobe,
  VcuMerc,
} from '../Images';

const professionalImages = {
  BranchSites,
  LoanforceInsider,
  MloSites,
  ProfPortfolioLandingPages,
  RecruitmentSite,
  SanctumTheme,
  VcuCobe,
  VcuMerc,
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

  return data.allProfessionalProjectsJson.nodes.map(project => (
    <ProjectEntry
      key={project.name}
      name={project.name}
      link={project.link}
      description={project.description}
      tech={project.tech}
      Image={professionalImages[project.image]}
    />
  ));
};

export default Professional;
