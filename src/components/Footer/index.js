import React from 'react';

// import styled components
import { FooterWrapper } from './styled';
import { Container } from '../styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <p>© {new Date().getFullYear()} gareth bk</p>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
