import React from 'react';
import { Link } from 'gatsby';

// import components
import { Github, Twitter } from '../Icons';
import { CarlsbadHalf } from '../Images';

// import styled components
import { IntroAboutText, IntroAboutWrapper } from './styled';

function IntroAbout() {
  return (
    <IntroAboutWrapper>
      <CarlsbadHalf />
      <IntroAboutText>
        <p>
          <span className="heavy">Hi there!</span> I'm Gareth and I like making
          things for the internet. Mostly I work on the front-end, with cool
          tech like React, Svelte, and GraphQL - even normal ol' JavaScript.
          Used to do WordPress development, still do too - PHP is my friend! Big
          fan of making the web accessible for everyone.
        </p>
        <p>
          Check out <a href="#projects">some stuff I've made</a>, read my{' '}
          <Link to="/blog">blog posts</Link>, or{' '}
          <Link to="/contact">get in touch!</Link> You can even{' '}
          <Link to="/about">learn more about me </Link>
          if you want.
        </p>
        <p className="social">
          <a
            href="https://github.com/garethpbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/garethbk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </p>
      </IntroAboutText>
    </IntroAboutWrapper>
  );
}

export default IntroAbout;
