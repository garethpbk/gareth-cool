import styled, { keyframes } from 'styled-components/macro';

const wooooo = keyframes`
  0% {
    transform: rotate(0deg) scale(0);
  }

  75% {
    transform: rotate(720deg) scale(1);
  }

  90% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
`;

const IntroHeading = styled.h1`
  animation: ${wooooo} 1s ease-in-out;

  transform-origin: center;
`;

export default IntroHeading;
