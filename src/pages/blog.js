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
