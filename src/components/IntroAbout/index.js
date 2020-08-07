import React from 'react';
import { Link } from 'gatsby';

// import components
import { Github, LinkedIn } from '../Icons';
import { CarlsbadHalf } from '../Images';

// import styled components
import {
  IntroAboutText,
  IntroAboutImageWrapper,
  IntroAboutWrapper,
} from './styled';

function IntroAbout() {
  return (
    <IntroAboutWrapper>
      <IntroAboutImageWrapper>
        <CarlsbadHalf />
      </IntroAboutImageWrapper>
      <IntroAboutText>
        <p>
          <span className="heavy">Hi there!</span> I'm Gareth and I like making
          things for the internet. Mostly I work on the front-end, with cool
          tech like React, Svelte, and GraphQL - even normal ol' JavaScript.
          Used to do WordPress development, still do too - PHP is my friend! Big
          fan of making the web accessible for everyone.
        </p>
        <p>
          You can read my <Link to="/blog">blog posts and presentations</Link>,
          or <Link to="/contact">get in touch!</Link> Or even{' '}
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
            href="https://www.linkedin.com/in/gareth-bromser-kloeden-77b93745/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </p>
      </IntroAboutText>
    </IntroAboutWrapper>
  );
}

export default IntroAbout;
