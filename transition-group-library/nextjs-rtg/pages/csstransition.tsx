import Head from "next/head";
import styles from "../styles/Home.module.css";

// components
import { Navigation } from "../components/Navigation";
import { CssTransitionComponent } from "../components/CssTransitionComponent";
import { CssTransitionComponentAppear } from "../components/CssTransitionComponentAppear";

export default function CssTransition() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSSTransition How-To</title>
        <meta
          name="description"
          content="How-To React CSSTransition Component"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h2>CSSTransition Component</h2>
        <p className={styles.article}>
          CSSTransition applies class names along the transition as{" "}
          <code>*-state</code> in order to activate the CSS transition. Matching
          this class names gives total control on the transition behaviour.
          <CssTransitionComponent />
          <CssTransitionComponentAppear/>
        </p>

        <article className={styles.article}>
          <h3>Fully owned styles</h3>
          <p>
            When the in prop is set to true, the child component will first
            receive the class <code>example-enter</code>, then the <code>example-enter-active</code> and
            so on...
          </p>
          
          <p>
            Targeting those prefix, It's possible to create custom transitions on top of them. Example:
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
            Include <code>unmountOnExit</code> is a must. The test made showed that
            the component won't work as expected without it. Suggested implementation
            is as follows:
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

        <h3>Styles</h3>
        <p>
          Meanwhile the CSSTransition component provides full control over the css classes & rules 
          than Transition component, the classes for this example should be declared as globals.
        </p>
        <h5>Consideration about globally declared css clasess</h5>
        <p>
          Some considerations should be had in mind, this isn't mean that the library couldn't be 
          combined with an atomic framework. What this shows, at glance, It's as React library 
          needs to be adapted to perfectly fit into Nextjs, maybe helped by other library as 
          vanilla-extract or any other extra step, which could be deeply investigated 
          in a further research.
        </p>
        </article>
      </main>
    </div>
  );
}
