import styled from 'styled-components';

// use !important to override the inline transition property from gatsby-image
const ProjectEntryWrapper = styled.div`
  &:hover {
    img {
      filter: none;
    }
  }

  img {
    filter: hue-rotate(-69deg) grayscale(69%);

    transition: filter 250ms ease-in-out, opacity 500ms linear !important;
  }

  h2 {
    font-size: 3rem;

    padding: 15px 0 0 0;
  }
`;

export default ProjectEntryWrapper;
