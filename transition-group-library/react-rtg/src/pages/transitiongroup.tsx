import styles from "../styles/Home.module.css";
import "../styles/switchtransition.css";

// components
import { Navigation } from "../components/Navigation";
import { TodoList } from "../components/TransitionGroupContainer";

export default function TransitionGroup() {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h2>TransitionGroup Component</h2>

        <p className={styles.article}>
          Manages a set of transition components in a list. As the transition
          component, It is a state machine for managing the mounting and
          unmounting of components over time.
        </p>

        <article className={styles.article} style={{ textAlign: "left" }}>
          <h2>Use case</h2>
          <p>
            It was meant to handle a multiplicity of components that should
            render transitions over each of them. Specifically for this tasks,
            It provides the way to achive the task with ease.
          </p>

          <p>
            The example is a simplified Todo List which adds and remove from a
            list performing those actions with 'ease-in / ease-out'.
          </p>

          <div
            style={{
              border: "1px solid grey",
              padding: "1rem",
              maxWidth: "500px",
            }}
          >
            <TodoList />
          </div>
        </article>

        <article className={styles.article}>
          <h3>Redering through iteration</h3>
          <p>
            As it would be done as normal for any React List Component, the
            TransitionGroup Component host an iterator that returns a Transition
            Component or CSSTransition Component used as a Container Component
            or wrapper for the element or component to render.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            <TransitionGroup className="todo-list">
              {items.map(({ text }) => (
                <CSSTransition
                  ...
                >
                  <li>{text}</li>
                </CSSTransition>
              ))}
            </TransitionGroup>
            `}
            </pre>
          </code>
        </article>
      </main>
    </div>
  );
}
