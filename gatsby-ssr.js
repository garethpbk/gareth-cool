import React from 'react';

// import context provider components
import CoolContext from './src/components/Context';

export const wrapPageElement = ({ element, props }) => (
  <CoolContext {...props}>{element}</CoolContext>
);
