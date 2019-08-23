import React, { useEffect, useState } from 'react';

// import components
import IntroAnimatedText from './IntroAnimatedText';

// import styled components
import { IntroHeading, IntroWrapper } from './styled';

function Intro() {
  const [heightProp, setHeightProp] = useState('100vh');

  useEffect(() => {
    setTimeout(() => {
      setHeightProp('25vh');
    }, 3000);
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
