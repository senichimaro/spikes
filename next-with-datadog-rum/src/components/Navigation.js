import Link from "next/link";
import styles from '@/styles/Home.module.css'

const Navigation = () => {
  return (
    <div style={{display:'flex'}}>
      <p>
        Go to&nbsp;
        <code className={styles.code}>
          <a style={{ display: "unset" }} href="/" rel="noopener noreferrer">
            Home
          </a>
        </code>
      </p>
      <p>
        Go to&nbsp;
        <code className={styles.code}>
          <a
            style={{ display: "unset" }}
            href="/about"
            rel="noopener noreferrer"
          >
            About
          </a>
        </code>
      </p>
      <p>
        Go to&nbsp;
        <code className={styles.code}>
          <a
            style={{ display: "unset" }}
            href="/requests"
            rel="noopener noreferrer"
          >
            Requests
          </a>
        </code>
      </p>
      <p>
        Go to&nbsp;
        <code className={styles.code}>
          <Link
            style={{ display: "unset" }}
            href="/dynamic"
          >
            Dynamic
          </Link>
        </code>
      </p>
    </div>
  );
};
export default Navigation;
