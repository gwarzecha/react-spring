import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const transition = useTransition(isToggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.h1 key={key} style={props}>
              Howdy
            </animated.h1>
          )
      )}

      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};
