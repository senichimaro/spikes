import React from "react";
import { Transition } from "react-transition-group";

export const EaseInOut = (props) => {
  const { timeout, children, transitionStyles, defaultStyle, className } =
    props;

  return (
    <Transition appear={true} in={true} timeout={timeout}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          {children}
        </div>
      )}
    </Transition>
  );
};
