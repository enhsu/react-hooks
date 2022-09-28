import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Hooks Introduction</title>
        <meta
          name="description"
          content="A project implement and describe react hooks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is a React hooks implement project</h1>
        <ul>
          <li>
            <Link href="/useState">useState</Link>
          </li>
          <li>
            <Link href="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link href="/useReducer">useReducer</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
