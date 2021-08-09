import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: "O",
      key: 1,
    },
    {
      letter: "l",
      key: 2,
    },
    {
      letter: "i",
      key: 3,
    },
    {
      letter: "v",
      key: 4,
    },
    {
      letter: "e",
      key: 5,
    },
  ]);
  const transition = useTransition(items, (item) => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}

      <button
        onClick={() =>
          setItems([
            {
              letter: "O",
              key: 1,
            },
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

// const transition = useTransition(isToggled, null, {
//   from: { opacity: 0, position: 'absolute' },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
// });

// <div style={{
//   position: 'relative'
// }}>
//   {transition.map(({ item, key, props }) =>
//     item ? (
//       <animated.h1 style={props}>Howdy</animated.h1>
//     ) : (
//       <animated.h1 style={props}>World</animated.h1>
//     )
//   )}

//   <button onClick={() => setToggle(!isToggled)}>Toggle</button>
// </div>
