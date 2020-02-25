import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// import components
import { Layout, SEO } from '../components';

// import styled components
import { PageContent } from '../components/styled/page';

function BlogPostTemplate({
  data: {
    post: {
      fields: { slug },
      frontmatter: { date, image, tags, title },
      html,
    },
  },
}) {
  return (
    <Layout>
      <SEO title="blog post" />
      <PageContent>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>
          {tags.map(tag => (
            <span key={tag}>#{tag} </span>
          ))}
        </p>
        <Img fluid={image.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PageContent>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        tags
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
