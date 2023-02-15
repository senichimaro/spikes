import Head from "next/head";
import styles from "../styles/Home.module.css";

// components
import { FadeInContainerWithoutButton } from "../components/FadeInContainerWithoutButton";
import { FadeInContainerWithButton } from "../components/FadeInContainerWithButton";
import { Navigation } from "../components/Navigation";

export default function Transition() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transition How-To</title>
        <meta name="description" content="How-To React Transition Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h2>Transition Component</h2>
        <p>
          By default the Transition component does not alter the behavior of the
          component it renders, it only tracks "enter" and "exit" states for the
          components.
        </p>

        <p>It's up to you to give meaning and effect to those states.</p>

        {/* Transition based in State switching */}
        <article className={styles.article}>
          <h3>Transition based in State switching</h3>
          <p>
            Toggling `<code>in</code>` prop (boolean) the component switch its
            transition state showing the component. There are 4 main state
            transitions{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reactcommunity.org/react-transition-group/transition"
            >
              see about here.
            </a>
          </p>

          <p>
            Meant for user interactions, a handler switch the state to initiate
            the transition.
          </p>
          <ul>
            <li>
              <code>in</code> equal to <code>!state</code> after click
            </li>
          </ul>
          <FadeInContainerWithButton />
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h3>Transition by default</h3>
          <p>
            By default <b>the enter transition is not performed</b> when the
            compoent first mounts, regardless of the value of <code>in</code>.
            To get this behavior, <code>appear</code> and <code>in</code> both
            properties should be equal to true.
          </p>
          <p>
            <small>
              <i>Reload the page if you couldn't see the transition</i>
            </small>
          </p>
          <FadeInContainerWithoutButton />
        </article>

        <article className={styles.article}>
          <h3>The styles</h3>
          <p>
            For those examples, styles are regular objects providing rules as
            React styling objects
          </p>
          <code className={styles.code}>
            <pre>
              {`
            const defaultStyle = {
              transition: opacity 500 ms ease-in-out,
              opacity: 0,
            };
            `}
            </pre>
          </code>
        </article>
      </main>
    </div>
  );
}
