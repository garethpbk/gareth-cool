import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// import components
import { Layout, SEO } from '../components';

function BlogPostTemplate({
  data: {
    markdownRemark: {
      fields: { slug },
      frontmatter: { date, image, tags, title },
      html,
    },
  },
}) {
  console.log(slug);
  return (
    <Layout>
      <SEO title="blog post" />
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
      <Img fluid={image.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date
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
