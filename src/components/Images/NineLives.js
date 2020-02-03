import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ProfPortfolioLandingPages = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nine-lives.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Nine Lives" />
  );
};

export default ProfPortfolioLandingPages;
