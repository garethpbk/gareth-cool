import { createGlobalStyle } from 'styled-components';

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
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  a, p {
    font-size: 1.8rem;
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
