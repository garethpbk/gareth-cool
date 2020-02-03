import styled from 'styled-components';

const IntroAboutText = styled.div`
  flex-basis: 60%;

  padding: 0 0 0 40px;

  p {
    font-size: 2rem;
  }

  .heavy {
    font-weight: 500;
  }

  .social {
    position: absolute;
    bottom: 15vh;

    a {
      margin: 0 15px 0 0;
    }

    svg {
      height: 35px;
      width: 35px;

      &:hover {
        fill: steelblue;
      }
    }
  }
`;

export default IntroAboutText;
