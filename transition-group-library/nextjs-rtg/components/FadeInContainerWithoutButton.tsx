import React from "react";
import { Transition } from "react-transition-group";

const duration = 1300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: "inline-block",
  backgroundColor: "blue",
  color: 'white'
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ children }) => {
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

export function FadeInContainerWithoutButton() {
  return <Fade>Transition by default</Fade>;
}