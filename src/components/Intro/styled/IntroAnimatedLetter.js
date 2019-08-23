import styled, { keyframes } from 'styled-components/macro';

const colorChange = keyframes`
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
`;

const wave = keyframes`
  0%, 100% {
    transform: translate3d(0px, -10px, 0px);
  }
  50% {
    transform: translate3d(0px, 10px, 0px);
  }
`;

const IntroAnimatedLetter = styled.span`
  display: inline-block;

  color: ${props => props.color};

  animation: ${wave} 0.5s cubic-bezier(0.36, 0.45, 0.63, 0.53)
      ${props => `-${props.delay * 0.05}s`},
    ${colorChange} 2s ease-in-out;
  animation-iteration-count: infinite;
`;

export default IntroAnimatedLetter;
