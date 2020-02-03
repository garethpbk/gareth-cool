import React from 'react';
import PropTypes from 'prop-types';

// import components
import Footer from '../Footer';
import Nav from '../Nav';

// import styled components
import { LayoutBorderWrapper, LayoutWrapper } from './styled';

// import global styles
import { Container, CustomProperties, GlobalStyles } from '../styled';

function Layout({ children }) {
  return (
    <LayoutBorderWrapper>
      <LayoutWrapper>
        <CustomProperties />
        <GlobalStyles />
        <Container>
          <Nav />
          <main>{children}</main>
        </Container>
        <Footer />
      </LayoutWrapper>
    </LayoutBorderWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
