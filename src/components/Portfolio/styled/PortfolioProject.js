import styled from 'styled-components/macro';

const PortfolioProject = styled.div`
  margin: 0 0 25px 0;
  padding: 0 0 15px 0;

  border-bottom 1px solid gray;

  a {
    font-size: 2rem;
  }

  p {
    font-weight: 500;

    margin: 0;

    &.expander {
      margin: 15px 0;

      cursor: pointer;

      &:hover {
        color: gray;
      }

      span {
        display: inline-block;

        transform: ${props => (props.expanded ? 'rotate(180deg)' : null)}
      }
    }

    &.repo {
      margin: 15px 0 0 0;

      a {
        display: flex;
        align-items: center;
      }

      svg {
        margin: 0 10px 0 0;
      }
    }
  }
`;

export default PortfolioProject;
