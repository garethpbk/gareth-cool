import styled from 'styled-components/macro';

const AnimatedLetter = styled.span`
  animation-delay: ${props => `-${props.delay * 0.05}s`};
`;

export default AnimatedLetter;
