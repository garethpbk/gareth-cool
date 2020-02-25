import styled from 'styled-components';

// import media queries
import { mediaQueries as mq } from '../../../util';

const IntroAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding: 0 0 15vh 0;

  .gatsby-image-wrapper {
    max-width: 100%;
  }

  @media ${mq.lg} {
    height: 65vh;

    flex-direction: row;
  }
`;

export default IntroAboutWrapper;
