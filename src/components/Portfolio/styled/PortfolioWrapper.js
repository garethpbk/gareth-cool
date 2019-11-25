import styled from 'styled-components/macro';

const PortfolioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;

  padding: 100px 0 0 0;

  h3 {
    margin: 25px 0;

    a {
      font-size: 2.8rem;
    }
  }
`;

export default PortfolioWrapper;
