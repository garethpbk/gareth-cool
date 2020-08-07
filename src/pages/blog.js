import React from 'react';
import { graphql, Link } from 'gatsby';

// import components
import { Layout, SEO } from '../components';

// import styled components
import { PageContent, PagePost } from '../components/styled/page';

function BlogPage({
  data: {
    posts: { edges },
  },
}) {
  return (
    <Layout>
      <SEO title="blog" />
      <PageContent>
        <h1>thanks for checking out my posts!</h1>
        <p>
          I am in the process of moving stuff hosted externally here. In the
          meantime, here's links to them:
        </p>
        <ul>
          <li>
            <a
              href="https://dev.to/garethbk/deploying-graphql-yoga-with-now-20-p0m"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploying graphql-yoga with Now 2.0 (Dev)
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@garethbk/functional-styled-components-theme-helpers-d99dd4087596"
              target="_blank"
              rel="noopener noreferrer"
            >
              Functional styled-components Theme Helpers (Medium)
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/open-graphql/rest-easy-with-apollo-client-388e26e7721c"
              target="_blank"
              rel="noopener noreferrer"
            >
              REST Easy with Apollo Client (Medium for OPENGraphQL)
            </a>
          </li>
        </ul>
        <p>
          I also like giving presentations at JavaScript meetups, here's slides
          to some of them:
        </p>

        <ul>
          <li>
            <a
              href="https://oh-god-svelte.netlify.app/01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oh God Not Another Framework: An Introduction to Svelte
            </a>
          </li>
          <li>
            <a
              href="https://animating-react-with-framer-motion.netlify.app/#0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Animating React with Framer Motion
            </a>
          </li>
          <li>
            <a
              href="https://framer-motion-pokedex.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pokedex Coded During Above Presentation
            </a>
          </li>
          <li>
            <a
              href="https://stay-suave-with-styled-components.netlify.app/#0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stay Suave with Styled Components
            </a>
          </li>
          <li>
            <a
              href="https://a-talk-about-talks.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Talk About Talks <em>(my favorite presentation I've given!)</em>
            </a>
          </li>
          <li>
            <a
              href="https://es6-and-beyond.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ES6 and Beyond
            </a>
          </li>
        </ul>
        {edges.map(edge => {
          const {
            node: {
              fields: { slug },
              frontmatter: { date, title },
            },
          } = edge;

          return (
            <PagePost key={slug}>
              <Link to={`/blog${slug}`}>{title}</Link>
              <span>{date}</span>
            </PagePost>
          );
        })}
      </PageContent>
    </Layout>
  );
}

export default BlogPage;

export const blogQuery = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
  }
`;
