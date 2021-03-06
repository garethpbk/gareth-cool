import { createGlobalStyle } from 'styled-components';

// import media queries
import { mediaQueries as mq } from '../../util';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  html, body {
    font-family: Quicksand, Arial, Helvetica, sans-serif;

    margin: 0;
    padding: 0;

    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.4rem;

    @media ${mq.lg} {
      font-size: 4.8rem;
    }
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  a, p, span, input, label, select {
    font-size: 1.8rem;
  }

  a {
    color: var(--blue);
    font-weight: 500;

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /** temporarily use important until can make own prism theme */
  pre {
    font-size: 1.8rem !important;
  }

  input, label, select {
    font-family: Quicksand, Arial, Helvetica, sans-serif;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
