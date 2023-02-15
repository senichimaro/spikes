import React from "react";
import { Transition } from "react-transition-group";

export const EaseInOut = (props: any) => {
  const { timeout, children, transitionStyles, defaultStyle, appear, inHandler } =
    props;

  return (
    <Transition appear={appear} in={inHandler} timeout={timeout}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          {children}
        </div>
      )}
    </Transition>
  );
};
