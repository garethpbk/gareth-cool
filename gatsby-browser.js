import React from 'react';
import 'prismjs/themes/prism-twilight.css';

// import typeface
import 'typeface-quicksand';

// import context provider components
import CoolContext from './src/components/Context';

export const wrapPageElement = ({ element, props }) => (
  <CoolContext {...props}>{element}</CoolContext>
);
