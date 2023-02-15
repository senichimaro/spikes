// DataDog Initialization
import tracer from "../../tracer";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

const inbound = "/api/requests";
const outbound = "https://jsonplaceholder.typicode.com/posts";

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <>
      <Head>
        <title>Requests Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to&nbsp;
            <code className={styles.code}>src/pages/requests.js</code>
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

        {/* Outbound Requests*/}
        <div className={styles.grid}>
          <span className={styles.card}>
            <h2 className={inter.className}>Requests: Outbound</h2>
            <p className={inter.className}>
              Fire Outbound requests methods from interface
            </p>
          </span>
          <span className={styles.card}>
            <h2 className={inter.className}>POST</h2>
            <p className={inter.className}>
              Fire Outbound requests by POST method from button.
              <br />
              <ButtonAnyMethod
                method="POST"
                route={outbound}
                setData={setData}
              />
            </p>
          </span>
          <span className={styles.card}>
            <h2 className={inter.className}>GET</h2>
            <p className={inter.className}>
              Fire Outbound requests by GET method from button.
              <br />
              <ButtonAnyMethod
                method="GET"
                route={outbound}
                setData={setData}
              />
            </p>
          </span>
        </div>

        {/* Inbound Requests*/}
        <div className={styles.grid}>
          <span className={styles.card}>
            <h2 className={inter.className}>Requests: Inbound</h2>
            <p className={inter.className}>
              Fire Inbound requests methods from interface
            </p>
          </span>
          <span className={styles.card}>
            <h2 className={inter.className}>POST</h2>
            <p className={inter.className}>
              Fire Inbound requests by POST method from button.
              <br />
              <ButtonAnyMethod
                method="POST"
                route={inbound}
                setData={setData}
              />
            </p>
          </span>
          <span className={styles.card}>
            <h2 className={inter.className}>GET</h2>
            <p className={inter.className}>
              Fire Inbound requests by GET method from button.
              <br />
              <ButtonAnyMethod method="GET" route={inbound} setData={setData} />
            </p>
          </span>
        </div>
        <Popup data={data} setData={setData} />
      </main>
    </>
  );
}

const ButtonAnyMethod = ({ method, route, setData }) => {
  const reqData = () => {
    setData(null);
    fetch(route, { method })
      .then((res) => res.json())
      .then((resData) => {
        if (!Object.prototype.toString.call(resData).includes("Array")) {
          /**
           * modify resData object from POST (object response)
           * to match the expected data model as Array of objects
           * where the last item is the request method used
           */
          resData = [
            {
              body: `${resData.id}: Sed ut perspiciatis unde omnis iste natus Catilina`,
              id: resData.id,
            },
            { method: `${method}` },
          ];
        } else {
          resData.push({ method: `${method}` });
        }
        setData(resData);
      });
  };

  return (
    <button onClick={reqData} className={styles.greyButton} type="button">
      {method}
    </button>
  );
};

const Popup = ({ data, setData }) => {
  const method = data ? data[data.length - 1].method : null;
  const result = data ? data[0] : "Lorem Ipsum";
  return data ? (
    <div className={styles.popupBackground}>
      <span className={styles.card}>
        <h2 className={inter.className}>{method}</h2>
        <p className={inter.className}>{result.body}</p>
        <br />
        <button
          onClick={() => setData(null)}
          className={styles.greyButton}
          type="button"
        >
          Close
        </button>
      </span>
    </div>
  ) : null;
};
