import React, { useEffect, useState } from 'react';

// import styled components
import { IntroAnimatedLetter } from './styled';

/**
 * cool solution for excluding greys
 * https://stackoverflow.com/questions/47616381/how-to-exclude-all-shades-of-gray-while-generating-random-hex-color-code
 */
function randomColor() {
  const rangeSize = 50;

  const parts = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * rangeSize),
    Math.floor(Math.random() * rangeSize) + 256 - rangeSize,
  ].sort((a, b) => Math.random() < 0.5);

  return parts.map(p => ('0' + p.toString(16)).substr(-2)).join('');
}

function IntroAnimatedText({ text }) {
  const [color, setColor] = useState('4682b4');

  useEffect(() => {
    const interval = setInterval(() => {
      // setColor(Math.floor(Math.random() * 16777215).toString(16));
      setColor(randomColor());
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  console.log(color);

  const lettersToAnimate = text.split('');

  return lettersToAnimate.map((letter, i) => (
    <IntroAnimatedLetter color={`#${color}`} delay={i} key={`letter-${i}`}>
      {letter}
    </IntroAnimatedLetter>
  ));
}

export default IntroAnimatedText;
