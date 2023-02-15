import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

// components
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: "blue" }}>Research</span>
        </h1>

        <p className={styles.description}>
          An investigation about Transition Group library to be used in DS.
        </p>

        {/* Conclusion */}
        <section>
          <h2>Conclusion</h2>

          <section className={styles.article} style={{ marginBottom: "3rem" }}>
            <p>
              It provides Container Components to connect css rules with
              components, manipulating the DOM along the repaint.
            </p>
            <p>
              React Transition Group{" "}
              <b>
                <i>is not an animation library</i>
              </b>
              . Instead, it's compounded of certain components which allows to
              apply css rules along the states it exposes.
            </p>
          </section>

          <p>
            The <i>How-To's</i>
          </p>
          <ul>
            <li>
              Transitions rules & styles in section{" "}
              <u><Link to="/stylevariables">Style Variables</Link></u>
            </li>
            <li>
              Overview of Transition Components (files for more in-depth):
            </li>
            <ul>
              <li>
                Simple transitions{" "}
                <u><Link to="/transition">Transition Component</Link></u>
              </li>
              <li>
                Fully managable transitions{" "}
                <u><Link to="/csstransition">CSSTransition Component</Link></u>
              </li>
              <li>
                Related transitions{" "}
                <u><Link to="/switchtransition">SwitchTransition Component</Link></u>
              </li>
              <li>
                Transitions for lists{" "}
                <u><Link to="/transitiongroup">TransitionGroup Component</Link></u>
              </li>
            </ul>
          </ul>

          <section className={styles.article}>
            <p className={styles.description}>
              'Container Component' means that all the React Transition Group
              Components will be used as wrappers, parents or containers for
              those which the effect of the transitions should be applied.
            </p>
          </section>

          {/* Pros */}
          <article className={styles.article}>
            <h3>Pros</h3>
            <p>
              <code>react-transition-group</code> is well documented library
              which exposes states at the mounting and unmounting steps of React
              Components and provide an interface to apply styles rules on them.
              It's simple to use and straight foward.
            </p>
            <p>
              Currently, the community around the project is well-sized:
              (github/npm)
            </p>
            <ul>
              <li>77 Contributors</li>
              <li>Used by 1.4m</li>
              <li>Latest release v4.4.2 - 29 May 2021</li>
              <li>9m weekly downloads</li>
            </ul>
          </article>

          {/* Cons */}
          {/* <article className={styles.article}>
            <h3>Cons</h3>
          </article> */}
        </section>
      </main>
    </div>
  );
}
