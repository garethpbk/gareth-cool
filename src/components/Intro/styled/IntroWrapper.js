import styled from 'styled-components/macro';

const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props => props.heightProp};

  transition: height 0.5s ease-in-out;
`;

export default IntroWrapper;
