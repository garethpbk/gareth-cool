import styled from 'styled-components';

const PortfolioTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props => (props.active ? '100%' : '75%')};
  width: 200px;

  border: 1px solid var(--blue);
  border-radius: 3px 3px 0 0;
  border-bottom: 0;

  font-size: 2rem;
  font-weight: 500;

  background-color: #${props => props.backgroundColor};

  padding: 10px 0;

  cursor: pointer;
`;

export default PortfolioTab;
