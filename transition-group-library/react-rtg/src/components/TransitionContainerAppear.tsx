import React from "react";
import { Transition } from "react-transition-group";

const duration = 1300;

const defaultStyle = {
  padding: 20,
  display: "inline-block",
  backgroundColor: "blue",
  color: 'white'
};

const transitionStyles: any = {
  entering: { opacity: 0, transition: `opacity ${duration}ms ease-in-out` },
  entered: { opacity: 1, transition: `opacity ${duration}ms ease-in-out` },
};

const Fade = ({ children }: any) => {
  return (
    <Transition appear={true} in={true} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export function TransitionContainerAppear() {
  return <Fade>Transition by default</Fade>;
}