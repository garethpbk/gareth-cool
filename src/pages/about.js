import React from 'react';

// import components
import { Layout, SEO } from '../components';

// import styled components
import { PageContent } from '../components/styled/page';

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <PageContent>
      <h1>all about me!</h1>
      <p>
        I'm Gareth and I like making things for the internet. Mostly I work with
        React but sometimes use Vue and normal ol' JavaScript and TypeScript if
        I'm feeling strong. Used to do WordPress development, still do too.
        Kinda like PHP. Big fan of making the web accessible for everyone.
      </p>
      <p>
        Outside of the computer I like to read books (fantasy, sci-fi, history,
        horror, ~literature~...
        <a
          href="https://www.goodreads.com/user/show/38372316-gareth-bk"
          target="_blank"
          rel="noopener noreferrer"
        >
          check out my Goodreads!
        </a>
        ), go running and cycling (
        <a
          href="https://www.strava.com/athletes/3001031"
          target="_blank"
          rel="noopener noreferrer"
        >
          find me on Strava!
        </a>
        ), write stories, cook, and have recently been getting back into guitar.
        I have two cats and a great partner and a nice lil home in San Diego,
        CA.
      </p>
    </PageContent>
  </Layout>
);

export default AboutPage;
