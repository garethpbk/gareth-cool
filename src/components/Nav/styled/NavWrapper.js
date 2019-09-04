import styled from 'styled-components/macro';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 25px;

  opacity: ${props => props.opacity};

  transition: opacity 0.25s ease-in-out;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export default NavWrapper;
