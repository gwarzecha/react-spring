import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    // ternary operator sets the opacity in one line
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? 'tomato' : 'green',
    // fontSize: isToggled ? '2rem' : '5em',
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
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
