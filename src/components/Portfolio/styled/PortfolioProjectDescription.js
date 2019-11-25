import styled from 'styled-components';

const PortfolioProjectDescription = styled.div`
  display: ${props => (props.expanded ? 'block' : 'none')};
`;

export default PortfolioProjectDescription;
