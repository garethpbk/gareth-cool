import React from 'react';

// import styled components
import { PortfolioTab, PortfolioTabsWrapper } from './styled';

const PortfolioTabs = ({ activeTab, setActiveTab }) => (
  <PortfolioTabsWrapper>
    <PortfolioTab
      active={activeTab === 'professional'}
      backgroundColor="f4f3f3"
      onClick={() => setActiveTab('professional')}
    >
      Professional
    </PortfolioTab>
    <PortfolioTab
      active={activeTab === 'personal'}
      backgroundColor="b1bed5"
      onClick={() => setActiveTab('personal')}
    >
      Personal
    </PortfolioTab>
    <PortfolioTab
      active={activeTab === 'presentations'}
      backgroundColor="dfdfdf"
      onClick={() => setActiveTab('presentations')}
    >
      Presentations
    </PortfolioTab>
    <PortfolioTab
      active={activeTab === 'pixels'}
      backgroundColor="bfd8d5"
      onClick={() => setActiveTab('pixels')}
    >
      Pixels
    </PortfolioTab>
  </PortfolioTabsWrapper>
);

export default PortfolioTabs;
