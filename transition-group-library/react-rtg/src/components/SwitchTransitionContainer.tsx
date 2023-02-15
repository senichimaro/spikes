import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import '../styles/switchtransition.css'

export function SwitchTransitionContainer() {
  const [state, setState] = React.useState(false);
  return (
    <SwitchTransition mode={state ? "out-in" : "in-out"}>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames={{
          enter: 'fade-enter',
          enterActive: 'fade-enter-active',
          exit: 'fade-exit',
          exitActive: 'fade-exit-active',
        }} 
      >
        <button onClick={() => setState(state => !state)}>
          {state ? "Goodbye, out-in!" : "Hello, in-out!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
  );
 }
