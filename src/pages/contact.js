import React from 'react';

// import components
import { Layout, SEO } from '../components';

// import styled components
import { PageContent } from '../components/styled/page';

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <PageContent>
      <h1>get in touch!</h1>
      <p>
        Wanna chat? Send me an email:{' '}
        <a href="mailto:garethbk@gmail.com">garethbk@gmail.com</a>
      </p>
      <p>Here's the real important stuff:</p>
      <p>
        <a
          href="https://github.com/garethpbk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/gareth-bromser-kloeden-77b93745/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </PageContent>
  </Layout>
);

export default ContactPage;
