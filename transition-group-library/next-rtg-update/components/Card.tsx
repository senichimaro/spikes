import React from "react";

import { EaseInOut } from "./TransitionContainer";

export const Card = (props) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-12">
          <div className="card-body">
            <h5 className="card-title">Transition</h5>

            <EaseInOut
              className="paragraph"
              timeout={1300}
              defaultStyle={{
                transition: "opacity 500 ms ease-in-out",
                opacity: 0,
              }}
              transitionStyles={{
                entering: {
                  opacity: 0,
                  transition: `opacity 1300ms ease-in-out`,
                },
                entered: {
                  opacity: 1,
                  transition: `opacity 1300ms ease-in-out`,
                },
              }}
            >
              <p className="card-text">
                A reusable ease-in-out Transition Component which
                receives specific styles through an object.
              </p>
            </EaseInOut>

            <p className="card-text">
              <small className="text-muted">
                Reload the page if you couldn't see the transition
              </small>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
