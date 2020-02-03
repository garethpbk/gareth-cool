import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const BetterContextWithHooks = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "better-context-with-hooks.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Better Context With Hooks"
    />
  );
};

export default BetterContextWithHooks;
