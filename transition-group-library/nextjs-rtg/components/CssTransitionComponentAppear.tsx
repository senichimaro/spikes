import React from "react";
import { CSSTransition } from "react-transition-group";

export function CssTransitionComponentAppear() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <div>
      <>
        <CSSTransition
          in={true}
          timeout={500}
          classNames="my-node"
          unmountOnExit
          appear={true}
          >
          <div>
            {"I'll appear by my-node-appear class and appear prop"}
          </div>
        </CSSTransition>
      </>
    </div>
  );
}
