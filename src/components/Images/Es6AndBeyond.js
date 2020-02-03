import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Es6AndBeyond = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "es6-and-beyond.jpg" }) {
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
      alt="ES6 And Beyond"
    />
  );
};

export default Es6AndBeyond;
