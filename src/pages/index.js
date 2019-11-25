import React from 'react';
import { graphql } from 'gatsby';

// import components
import { Intro, Layout, Portfolio, SEO } from '../components';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Portfolio projects={data} />
  </Layout>
);

export default IndexPage;

export const projects = graphql`
  query GET_ALL_PROJECTS_QUERY {
    allProfessionalProjectsJson {
      nodes {
        name
        link
        description
        tech
      }
    }
    allPersonalProjectsJson {
      nodes {
        name
        link
        description
        tech
        repo
      }
    }
    allPresentationsJson {
      nodes {
        name
        link
        description
        tech
        repo
      }
    }
  }
`;
