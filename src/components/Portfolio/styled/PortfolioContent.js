import styled from 'styled-components/macro';

const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 50px;

  margin: 50px 0 0 0;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  h4 {
    font-size: 2.4rem;

    margin: 0 0 25px 0;
  }
`;

export default PortfolioContent;
