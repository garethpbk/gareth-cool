import React, { createContext, useState } from 'react';

export const SuperCoolContext = createContext();

function CoolContext({ children }) {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  console.log(animationPlayed);

  const value = {
    state: {
      animationPlayed,
    },
    functions: {
      setAnimationPlayed,
    },
  };

  return (
    <SuperCoolContext.Provider value={value}>
      {children}
    </SuperCoolContext.Provider>
  );
}

export default CoolContext;
