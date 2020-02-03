import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 10vh;

  padding: 25px;

  opacity: ${props => props.opacity};

  transition: opacity 0.25s ease-in-out;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export default NavWrapper;
