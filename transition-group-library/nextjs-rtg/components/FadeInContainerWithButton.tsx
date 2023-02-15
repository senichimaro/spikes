import React from "react";
import { Transition } from "react-transition-group";

const duration = 300;

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

const Fade = ({ in: inProp, children }) => {
  return (
    <Transition in={inProp} timeout={duration}>
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
};

type handlerProps = {
  show: boolean;
};

export class FadeInContainerWithButton extends React.Component {
  state = { show: false };

  handleToggle() {
    this.setState(({ show }: handlerProps) => ({
      show: !show,
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={() => this.handleToggle()}>Click to toggle</button>
        <div>
          <Fade in={show}>Transition based in State switching</Fade>
        </div>
      </div>
    );
  }
}
