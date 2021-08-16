import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";

export const Accordion = () => {
  const [on, toggle] = useState();
  const [bind, { height, top }] = useMeasure();
  console.log('height:', height);
  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + top * 2 : 0
  })
  

  return (
    <div>
      <h1>
        <button onClick={() => (!on)}>Toggle</button>
      </h1>
      {/* binds to element being measured */}
      <animated.div style={animation} >
        <div {...bind} className="accordion">
          <p>Hi from the accordion</p>
        </div>
      </animated.div>
    </div>
  );
};
