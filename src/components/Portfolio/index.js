import React from 'react';
import { Link } from 'gatsby';

// import styled components
import { PortfolioWrapper } from './styled';

function Portfolio() {
  return (
    <PortfolioWrapper>
      <h2>here's some stuff I made, give it a gander.</h2>
      <h3>
        you can also <Link to="/blog">check out my blog posts</Link>,{' '}
        <Link to="/about">learn more about me</Link>, or{' '}
        <Link to="/contact">contact me!</Link>
      </h3>
    </PortfolioWrapper>
  );
}

export default Portfolio;
