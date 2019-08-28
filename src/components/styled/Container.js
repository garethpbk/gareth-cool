import styled from 'styled-components/macro';

// import media queries
import { mediaQueries as mq } from '../../util';

const Container = styled.div`
  max-width: 100%;

  margin: 0 auto;

  @media ${mq.sm} {
    width: 560px;
  }

  @media ${mq.md} {
    width: 752px;
  }

  @media ${mq.lg} {
    width: 976px;
  }

  @media ${mq.xl} {
    width: 1184px;
  }
`;

export default Container;
