import React from 'react';
import PropTypes from 'prop-types';

// import components
import Nav from '../Nav';

// import global styles
import { Container, CustomProperties, GlobalStyles } from '../styled';

function Layout({ children }) {
  return (
    <>
      <CustomProperties />
      <GlobalStyles />
      <Container>
        <Nav />
        <main>{children}</main>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
