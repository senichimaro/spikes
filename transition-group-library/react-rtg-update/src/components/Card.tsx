import React from "react";

import { EaseInOut } from "./TransitionContainer";
import { Modal } from "./Modal";

export const Card = (props: any) => {
  const { text } = props;
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-12">
          <div className="card-body">
            <h5 className="card-title">Transition</h5>
            <p className="card-text">
              A reusable Modal Component which implements an ease-in-out Transition
              Component From RTG receiving specific styles through an object.
            </p>

            <Modal element={<p>Prop as text or Element!</p>}>
              Child as text or Element!
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
