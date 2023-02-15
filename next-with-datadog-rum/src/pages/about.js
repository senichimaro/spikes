// DataDog Initialization
import tracer from "../../tracer";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to&nbsp;
            <code className={styles.code}>src/pages/about.js</code>
          </p>
          <Navigation />
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <span
            className={styles.card}
          >
            <h2 className={inter.className}>
              About
            </h2>
            <p className={inter.className}>
              Links are using {"<a>"} elements to request by GET Method.
            </p>
          </span>
        </div>
      </main>
    </>
  )
}