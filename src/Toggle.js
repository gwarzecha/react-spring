import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    // ternary operator sets the opacity in one line
    opacity: isToggled ? 1 : 0
  });

  return (
    <div>
      <animated.h1 style={fade}>Howdy</animated.h1>
      <button onClick={() => setToggle(!isToggled)} >
        Toggle
      </button>
    </div>
  )
}
