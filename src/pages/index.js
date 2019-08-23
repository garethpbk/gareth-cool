import React from 'react';

// import components
import { Intro, Layout, Portfolio, SEO } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Portfolio />
  </Layout>
);

export default IndexPage;
