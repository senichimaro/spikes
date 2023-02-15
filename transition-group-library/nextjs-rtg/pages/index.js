import Head from "next/head";
import styles from "../styles/Home.module.css";

// components
import { Navigation } from "../components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How-To React Transition Group</title>
        <meta name="description" content="How-To React Transition Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

          <p>
            <small>
              <i>About React implementation see <Link href="https://react-transition-group.vercel.app/">React Transition Group into React</Link> (soon)</i>
            </small>
          </p>

          <p>
            It provides Container Components to connect css rules with
            components, manipulating the DOM along the repaint.
          </p>

          <p>
            Then, the first and most important to know is React Transition Group
            is not an animation library.
          </p>
          <p>
            Instead, it's compounded of certain components requiring a specific
            combination of structure and css files/rules declaration.
          </p>

          <p>
            For How-To documentation for each component navigate to its pages in
            this site.
          </p>

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
          <article className={styles.article}>
            <h3>Cons</h3>

            <p>
              Currently, the library is meant for React and CRA environment
              which means It shows differences and limitations details from
              documentation to flat Nextjs on implementation.
            </p>
            
            <p>
              The use cases are generalized on the same cases across the
              community. It's difficult to find examples which differs from most
              simple and basics.
            </p>

            <h4>Local vs. Global Styles</h4>
            <p>
              At glance, as React library doesn't perfectly fit into Nextjs,
              components as CSSTransition can load their own styles files in
              React environment but It doesn't in Nextjs which should load them
              from global.
            </p>
            <p>
              This isn't mean that the library couldn't be combined with an
              atomic framework. At glance, needs to be adapted maybe helped by
              other library as vanilla-extract or any other extra step.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
