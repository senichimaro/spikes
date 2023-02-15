import styles from "../styles/Home.module.css";
import "../styles/switchtransition.css";

// components
import { Navigation } from "../components/Navigation";
import { SwitchTransitionContainer } from "../components/SwitchTransitionContainer";

export default function SwitchTransition() {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h2>SwitchTransition Component</h2>

        <p className={styles.article}>
          Controls the render between states transitions. It will wrap the
          Transition or CSSTransition (the one choosen) component selected to
          handle the css visual effect, handling the transition between what
          it's entering and exiting.
        </p>

        <article className={styles.article}>
          <h2>Use case</h2>
          <p>
            Based on the child's key makes a transition between two modes,
            <code>out-in</code> which waits until the old child leaves and then
            inserts a new child, or <code>in-out</code> inserts a new child
            first, waits for the new child to enter and then removes the old
            child.
          </p>
          <p>
            <small>
              <i>
                Click both 'Hello' & 'Goodby' to see the both transition
                behaviours.
              </i>
            </small>
          </p>

          <div
            style={{
              border: "1px solid grey",
              padding: "1rem",
              maxWidth: "500px",
            }}
          >
            <SwitchTransitionContainer />
          </div>
        </article>

        <article className={styles.article}>
          <h3>Modes as transition Standards</h3>
          <p>
            As <code>out-in</code> the current element transitions out first,
            then when complete, the new element transitions in.
          </p>
          <p>
            As <code>in-out</code> the new element transitions in first, then
            when complete, the current element transitions out.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            <SwitchTransition mode={state ? "out-in" : "in-out"}>
              <CSSTransition
                key={state ? "Goodbye, world!" : "Hello, world!"}
                addEndListener={
                  (node, done) => node.addEventListener("transitionend", done, false)
                }
                classNames={{...}}
              >
                <button onClick={() => setState(state => !state)}>
                  {state ? "Goodbye, out-in!" : "Hello, in-out!"}
                </button>
              </CSSTransition>
            </SwitchTransition>
            `}
            </pre>
          </code>
        </article>

        <article className={styles.article}>
          <h3>addEndListener</h3>

          <p>
            Custom transition 'end' trigger, called with the transitioning
            'DOM node' and a 'done' callback.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            addEndListener={(node, done) => {
              // use the css transitionend event to mark the finish of a transition
              node.addEventListener('transitionend', done, false);
            }}
    `}
            </pre>
          </code>
        </article>
      </main>
    </div>
  );
}
