import React from 'react';
import PropTypes from 'prop-types';

// import global styles
import { GlobalStyles } from '../styled';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
