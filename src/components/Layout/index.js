import React from 'react';
import PropTypes from 'prop-types';

// import global styles
import { Container, GlobalStyles } from '../styled';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
