import React, { useContext } from 'react';
import { Link } from 'gatsby';

// import context
import { SuperCoolContext } from '../Context';

// import styled components
import { NavMenu, NavWrapper } from './styled';

function Nav() {
  const {
    state: { animationPlayed },
  } = useContext(SuperCoolContext);

  return (
    <NavWrapper opacity={animationPlayed ? 1 : 0}>
      <Link to="/">gbk.</Link>
      <NavMenu>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/about">about me</Link>
        </li>
        <li>
          <Link to="/contact">contact me</Link>
        </li>
      </NavMenu>
    </NavWrapper>
  );
}

export default Nav;
