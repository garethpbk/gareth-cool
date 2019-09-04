import React from 'react';
import { Link } from 'gatsby';

// import styled components
import { Container } from '../styled';
import { PortfolioContent, PortfolioProject, PortfolioWrapper } from './styled';

function Portfolio() {
  return (
    <PortfolioWrapper id="projects">
      <h2>here's some stuff I made, give it a gander.</h2>
      <p>(working on making this site look pretty bear with me ty)</p>
      <h3>
        you can also <Link to="/blog">check out my blog posts</Link>,{' '}
        <Link to="/about">learn more about me</Link>, or{' '}
        <Link to="/contact">contact me!</Link>
      </h3>
      <Container>
        <PortfolioContent>
          <div>
            <h4>Professional Work</h4>
            <PortfolioProject>
              <a
                href="https://onetrusthomeloans.com/bridge-loan"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneTrust Home Loans Bridge Loans
              </a>
              <p>Gatsby</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://onetrusthomeloans.com/lo/mglynn"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneTrust Home Loans Loan Originator Websites
              </a>
              <p>React</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://onetrusthomeloans.com/branches"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneTrust Home Loans Branch Websites
              </a>
              <p>React, GraphQL</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://onetrusthomeloans.com/portfolio-loans"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneTrust Home Loans Portfolio Loans
              </a>
              <p>Gatsby</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://joinonetrust.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneTrust Home Loans Recruitment Website
              </a>
              <p>React</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://merc.soe.vcu.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virginia Commonwealth University Metropolitan Educational
                Research Consortium Website
              </a>
              <p>TerminalFour</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://cobe.vcu.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virginia Commonwealth University Center for Emotional &
                Behvioral Health Website
              </a>
              <p>WordPress</p>
            </PortfolioProject>
          </div>
          <div>
            <h4>Personal Projects</h4>
            <PortfolioProject>
              <a
                href="https://antediluvianmag.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weird Fiction Magazine Website
              </a>
              <p>Gatsby, WordPress</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://stravisualize.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strava Visualizer & GraphQL Server
              </a>
              <p>React, GraphQL</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://ninelives.gareth.cool"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nine Lives
              </a>
              <p>Phaser CE, Photoshop, Aesprite</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://grace-portfolio.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artist Portfolio Website
              </a>
              <p>Gatsby, Contentful</p>
            </PortfolioProject>
            <PortfolioProject>
              <a
                href="https://grinning-moon.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zine Library Website (NSFW)
              </a>
              <p>Gatsby, Contentful</p>
            </PortfolioProject>
          </div>
        </PortfolioContent>
      </Container>
    </PortfolioWrapper>
  );
}

export default Portfolio;
