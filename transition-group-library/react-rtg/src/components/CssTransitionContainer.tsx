import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from '../styles/csstransition.module.css'

export function CssTransitionContainer() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <div>
      <>
        <CSSTransition
          in={inProp}
          timeout={500}
          classNames={{...styles}}
          unmountOnExit
          >
          <p>
            I'll receive my-node-* classes
          </p>
        </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to start transition
      </button>
      </>
    </div>
  );
}
