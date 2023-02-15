import React from "react";

import { EaseInOut } from "./TransitionContainer";

const modalBackground: any = {
  position: "fixed",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
const modalBody = {
  backgroundColor: "white",
  margin: "10% auto",
  padding: "20px",
  width: "50%",
};

export const Modal = (props: any) => {
  const [shouldShow, setShouldShow] = React.useState(false);
  const { children, element } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShouldShow(!shouldShow)}
      >
        I'm a Modal
      </button>

      {shouldShow && (
        <EaseInOut
        timeout={500}
        defaultStyle={{
          transition: "opacity 500 ms ease-in-out",
          opacity: 0,
        }}
        transitionStyles={{
          entering: {
            opacity: 0,
            transition: `opacity 500ms ease-in-out`,
        },
        entered: {
            opacity: 1,
            transition: `opacity 500ms ease-in-out`,
        },
        exiting: { 
            opacity: 1,
            transition: `opacity 500ms ease-in-out`,
        },
        exited: { 
            opacity: 0,
            transition: `opacity 500ms ease-in-out`,
        },
        }}
        appear={true}
        inHandler={shouldShow}
      >
          <div style={modalBackground}>
            <div style={modalBody} onClick={(e) => e.stopPropagation()}>
              <div className="card text-center">
                <div className="card-header">
                  Transition Modal
                  <button
                    className="ml-3"
                    type="button"
                    onClick={() => setShouldShow(!shouldShow)}
                  >
                    X
                  </button>
                </div>
                <div className="card-body">
                {element}
                {children}
                </div>
              </div>
            </div>
          </div>
        </EaseInOut>
      )}
    </React.Fragment>
  );
};

/**
 * Subit closing due to modal state, not due to transition component.
 */