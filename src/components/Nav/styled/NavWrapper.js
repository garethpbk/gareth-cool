import styled from 'styled-components/macro';

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px;

  opacity: ${props => props.opacity};

  transition: opacity 0.25s ease-in-out;
`;

export default NavWrapper;
