import React, { useContext, useEffect, useState } from 'react';

// import context
import { SuperCoolContext } from '../Context';

// import components
import IntroAnimatedText from './IntroAnimatedText';

// import styled components
import { IntroHeading, IntroWrapper } from './styled';

function Intro() {
  const {
    state: { animationPlayed },
    functions: { setAnimationPlayed },
  } = useContext(SuperCoolContext);

  const [heightProp, setHeightProp] = useState('100vh');

  useEffect(() => {
    if (animationPlayed) {
      setHeightProp('25vh');
    } else {
      setTimeout(() => {
        setAnimationPlayed(true);
        setHeightProp('25vh');
      }, 1500);
    }
  }, []);

  return (
    <IntroWrapper heightProp={heightProp}>
      <IntroHeading>
        hey y'all welcome to my <IntroAnimatedText text="website" />
      </IntroHeading>
    </IntroWrapper>
  );
}

export default Intro;
