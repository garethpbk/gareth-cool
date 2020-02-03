import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const StaySuaveWithStyledComponents = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "stay-suave-with-styled-components.jpg" }
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
      alt="Stay Suave With Styled Components"
    />
  );
};

export default StaySuaveWithStyledComponents;
