import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const CarlsbadHalf = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "carlsbad-half.jpg" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="Carlsbad Half Marathon 2020"
    />
  );
};

export default CarlsbadHalf;
