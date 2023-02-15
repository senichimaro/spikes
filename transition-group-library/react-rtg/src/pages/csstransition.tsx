import styles from "../styles/Home.module.css";

import "../styles/csstransition.css";

// components
import { Navigation } from "../components/Navigation";
import { CssTransitionContainer } from "../components/CssTransitionContainer";
import { CssTransitionContainerAppear } from "../components/CssTransitionContainerAppear";

export default function CssTransition() {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h2>CSSTransition Component</h2>
        <p className={styles.article}>
          CSSTransition applies class names along the transition as{" "}
          <code>*-state</code> in order to activate the CSS transition. Matching
          this class names gives total control on the transition behaviour.
          <div
            style={{
              border: "1px solid grey",
              padding: "1rem",
              maxWidth: "500px",
            }}
          >
            <CssTransitionContainer />
          </div>
          <p>
            <small>
              <i>Reload the page if you couldn't see the transition</i>
            </small>
          </p>
          <div
            style={{
              border: "1px solid grey",
              padding: "1rem",
              maxWidth: "500px",
            }}
          >
            <CssTransitionContainerAppear />
          </div>
        </p>

        <article className={styles.article}>
          <h3>Fully owned styles</h3>
          <p>
            When the in prop is set to true, the child component will first
            receive the class <code>example-enter</code>, then the{" "}
            <code>example-enter-active</code> and so on...
          </p>

          <p>
            Targeting those prefix, It's possible to create custom transitions
            on top of them. Example:
          </p>
          <code className={styles.code}>
            <pre>
              {`
            .my-node-enter {
                opacity: 0;
              }
              .my-node-enter-active {
                opacity: 1;
                transition: opacity 200ms;
              }
              .my-node-exit {
                opacity: 1;
              }
              .my-node-exit-active {
                opacity: 0;
                transition: opacity 200ms;
              }
            `}
            </pre>
          </code>
        </article>

        <article className={styles.article}>
          <h3>@NOTES</h3>

          <h3>unmountOnExit</h3>
          <p>
            Include <code>unmountOnExit</code> is a must. The test made showed
            that the component won't work as expected without it. Suggested
            implementation is as follows:
          </p>
          <code className={styles.code}>
            <pre>
              {`
            <CSSTransition ...
                unmountOnExit
            >
                ...
            </CSSTransition>
            `}
            </pre>
          </code>
        </article>
      </main>
    </div>
  );
}
