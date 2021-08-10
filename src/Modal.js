import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

const Modal = ({ closeModal, animation, pointerEvents }) => {
  return (
    // pointerEvents needs to be double brackets cuz it's an object for style
    <div className="modal" style={{ pointerEvents }}>
      <animated.div className="modal-card" style={animation}>
        <h1>Modal</h1>
        <button onClick={closeModal}>Close</button>
      </animated.div>
    </div>
  );
};

const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  });
  // ensures that you cannot click on the button while the modal is in transition
  const pointerEvents = on ? "all" : "none";

  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              pointerEvents={pointerEvents}
              animation={animation}
              closeModal={() => toggle(false)}
            />
          )
      )}

      <button onClick={() => toggle(!on)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
