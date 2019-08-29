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
