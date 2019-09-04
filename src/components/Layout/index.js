import React from 'react';
import PropTypes from 'prop-types';

// import components
import Footer from '../Footer';
import Nav from '../Nav';

// import styled components
import { LayoutWrapper } from './styled';

// import global styles
import { Container, CustomProperties, GlobalStyles } from '../styled';

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <CustomProperties />
      <GlobalStyles />
      <Container>
        <Nav />
        <main>{children}</main>
      </Container>
      <Footer />
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
