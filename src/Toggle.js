import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // ternary operator sets the opacity in one line
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? "tomato" : "green",
    // fontSize: isToggled ? '2rem' : '5em',
    y: isToggled ? 0 : 1,
  });

  return (
    <div>
      <animated.h1
        style={{
          // y isn't a valid css property, need .interpolate to assign the value and return the property
          transform: y
            .interpolate({
              // emulates css keyframes
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, -25, -50, -100, -50],
            })
            .interpolate((y) => `translate3d(0, ${y}px, 0)`),
          color,
        }}
      >
        Howdy
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};
