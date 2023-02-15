import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
// components
import { TransitionContainerAppear } from "../components/TransitionContainerAppear";
import { Navigation } from "../components/Navigation";
import { CssTransitionContainerAppear } from "../components/CssTransitionContainerAppear";
import { CssTransitionContainer } from "../components/CssTransitionContainer";
import { SwitchTransitionContainer } from "../components/SwitchTransitionContainer";

export default function StyleVariables() {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h2>Style Variables</h2>

        <p>
          How-To define the transition behavior and effects for components when
          appearing and exiting.
        </p>

        {/* Transition based in State switching */}
        <article className={styles.article}>
          <h3>classNames from Transition Components</h3>
          <p>
            The <code>classNames</code> attribute is a single name provided to
            be applied to the child component, e.g. classNames="my-node", which
            will be suffixed for each stage: appears, enters, exits and finished
            the transition. Those suffix are:
          </p>

          <ul>
            <li>...-appear</li>
            <li>...-appear-active</li>
            <li>...-appear-done</li>
            <li>...-enter</li>
            <li>...-enter-active</li>
            <li>...-enter-done</li>
            <li>...-exit</li>
            <li>...-exit-active</li>
            <li>...-exit-done</li>
          </ul>

          <p>
            They are joined with the ones that are already defined on the child
            component, so if you want to add some base styles, you can use
            className without worrying that it will be overridden.
          </p>

          <p>
            The enter transition when it first mounts is performed by a
            Component Property
          </p>
          <ul>
            <li>appear</li>
          </ul>

          <p>
            By default the child component does not perform the enter transition
            when it first mounts, regardless of the value of in. If you want
            this behavior, set both appear and in to true.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            <Transition ...
                appear={true}
            >
                ...etc..
            </Transition>
            `}
            </pre>
          </code>

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
            <TransitionContainerAppear />
          </div>
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h3>How-To define transitions</h3>
          <p>
            Each of Transition Group Components expose states as state machine
            for managing the mounting and unmounting of components over time.
          </p>

          <p>
            Those states are suffixed to the name provided through classNames
            attribute, so common css classes can ruled those state from a css
            file, module or camelCase variables as follows:
          </p>
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h4>CSS rules basic definition</h4>

          <p>
            Specified independently each individual selector based in the name
            provided to the parent Transition Component (the attribute
            classNames) plus the suffix for the target state.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            .my-node-enter {
              opacity: 0;
              transform: scale(1.1);
            }
            ...etc..
            `}
            </pre>
          </code>

          <p>
            An example could be found in the CssTransitionContainerAppear from
            this documentation:
          </p>
          <ol>
            <li>In the csstransition.css file the classes are defined.</li>
            <li>The file is imported into CssTransitionContainerAppear</li>
            <li>
              The classNames prop is defined as{" "}
              <code>classNames="my-node"</code>
            </li>
          </ol>

          <p>
            This component appears without user interaction by default, then
            It's using just *-appear states which are appear & appear-active for
            this example.
          </p>

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
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h4>Import classes as Modules</h4>
          <p>
            To use classes as CSS Modules it's needed to create rules as
            camelCase selectors in the CSS file, then it could be simply spread
            into the choosen Transition Component.
          </p>

          <code className={styles.code}>
            <pre>
              {`
            .enter {
              opacity: 0;
              transform: scale(1.1);
            }
            .enterActive {
              opacity: 1;
              transform: scale(1);
              transition: opacity 300ms, transform 300ms;
            }
            ...etc..          
            `}
            </pre>
          </code>

          <p>
            An example could be found in the CssTransitionContainer from this
            documentation:
          </p>
          <ol>
            <li>
              In csstransition.module.css classes are as{" "}
              <code>.enterActive{"{...}"}</code>
            </li>
            <li>
              Then{" "}
              <code>
                import styles from '../styles/csstransition.module.css'
              </code>
            </li>
            <li>
              The classNames prop is defined as{" "}
              <code>
                classNames={"{{"} ...styles {"}}"}
              </code>
            </li>
          </ol>

          <div
            style={{
              border: "1px solid grey",
              padding: "1rem",
              maxWidth: "500px",
            }}
          >
            <CssTransitionContainer />
          </div>

          <h5 id="typesForClassNames</article>">Type for classNames</h5>
          <code className={styles.code}>
            <pre>
              {`
            type: string | { 
              appear?: string, 
              appearActive?: string,
              enter?: string,
              enterActive?: string,
              enterDone?: string, 
              exit?: string, 
              exitActive?: string, 
              exitDone?: string, 
            }
            `}
            </pre>
          </code>
        </article>

        <article className={styles.article}>
          <h4>Specify classes for transitions</h4>

          <p>
            Each individual classNames can also be specified independently to
            match specifically defined rules for transitions, pairing selectors
            with Types for classNames.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            classNames={{
              appear: 'my-appear',
              appearActive: 'my-active-appear',
              appearDone: 'my-done-appear',
              enter: 'my-enter',
              enterActive: 'my-active-enter',
              enterDone: 'my-done-enter',
              exit: 'my-exit',
              exitActive: 'my-active-exit',
              exitDone: 'my-done-exit',
            }}             
            `}
            </pre>
          </code>

          <p>
            An example could be found in the SwitchTransitionContainer from this
            documentation:
          </p>
          <ol>
            <li>In switchtransition.css selectors are commonly defined</li>
            <li>
              Then{" "}
              <code>import styles from '../styles/switchtransition.css'</code>
            </li>
            <li>
              I the classNames prop state variables are paired with selectors
            </li>
          </ol>

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
          <h4>Transitions based in Transitions States</h4>

          <p>
            Transition states begins at the "Enter" stage. During this stage,
            the component will shift from its current transition state, to
            'entering' for the duration of the transition and then to the
            'entered' stage once it's complete.
          </p>

          <p>
            At the final stage of the transition same thing happens except the
            state moves from 'exiting' to 'exited'.
          </p>

          <p>There are 4 main states a Transition can be in:</p>
          <ul>
            <li>'entering' as *-enter</li>
            <li>'entered' as *-enter-active</li>
            <li>'exiting' as *-exit</li>
            <li>'exited' as *-exit-active</li>
          </ul>

          <p>
            Transition state is toggled via the <code>in</code> prop or settled
            as true to initiate by defualt via the <code>appear</code> prop.
          </p>

          <p>Simplifyed looks as:</p>
          <code className={styles.code}>
            <pre>
              {`
            const transitionStyles = {
              entering: { opacity: 0 },
              entered: { opacity: 1 },
            };

            <Transition>
              {(state) => (
                <p
                  style={{
                    ...transitionStyles[state],
                  }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </p>
              )}
            </Transition>
            `}
            </pre>
          </code>

          <p>
            An example could be found in the TransitionContainerAppear from this
            documentation:
          </p>
          <ol>
            <li>In transitionStyles var the states are paired</li>
            <li>
              Then in the style prop is spreaded{" "}
              <code>transitionStyles[state]</code>
            </li>
          </ol>

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
            <TransitionContainerAppear />
          </div>
        </article>
      </main>
    </div>
  );
}
