import React from 'react';
import { animated } from 'react-spring';

// the style prop is passed in from App.js (style=navAnimation) to apply to the div
export const Nav = ({ style }) => {
  return (
    <animated.div className='nav-wrapper' style={style}>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Stuff</a>
        <a href='#'>Cats</a>
      </nav>
    </animated.div>
  );
};
