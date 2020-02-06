import styled from 'styled-components/macro';

function setBackgroundColor(active) {
  switch (active) {
    case 'professional':
      return 'f4f3f3';
    case 'personal':
      return 'b1bed5';
    case 'presentations':
      return 'dfdfdf';
    case 'openSource':
      return '88abc2';
    case 'pixels':
      return 'bfd8d5';
    default:
      return 'f4f3f3';
  }
}

const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 25px;

  padding: 50px 15px;

  background-color: #${props => setBackgroundColor(props.activeTab)};

  border: 1px solid var(--blue);
  border-top: none;

  position: relative;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  h4 {
    font-size: 2.4rem;

    margin: 0 0 25px 0;
  }

  &::after {
    content: '';

    width: calc(100% - 798px);
    height: 1px;

    background-color: var(--blue);

    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

export default PortfolioContent;
