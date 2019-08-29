import React, { createContext, useEffect, useState } from 'react';

export const SuperCoolContext = createContext();

function CoolContext({ children, location: { pathname } }) {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const value = {
    state: {
      animationPlayed,
    },
    functions: {
      setAnimationPlayed,
    },
  };

  useEffect(() => {
    if (pathname !== '/') {
      setAnimationPlayed(true);
    }
  }, []);

  return (
    <SuperCoolContext.Provider value={value}>
      {children}
    </SuperCoolContext.Provider>
  );
}

export default CoolContext;
