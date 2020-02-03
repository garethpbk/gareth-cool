import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ATalkAboutTalks = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "a-talk-about-talks.jpg" }) {
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
      alt="A Talk About Talks"
    />
  );
};

export default ATalkAboutTalks;
