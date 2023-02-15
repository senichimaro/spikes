import React from "react";
import { CSSTransition } from "react-transition-group";

export function CssTransitionComponent() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <div>
      <>
        <CSSTransition
          in={inProp}
          timeout={500}
          classNames="my-node"
          unmountOnExit
          >
          <div>
            {"I'll receive my-node-* classes"}
          </div>
        </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to start transition
      </button>
      </>
    </div>
  );
}
