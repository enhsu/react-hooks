import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type LinkPropsType = {
  url: string;
  content: string;
};

const LinkItem = ({ url, content }: LinkPropsType) => {
  return (
    <li>
      <Link href={url}>{content}</Link>
    </li>
  );
};

const pages: LinkPropsType[] = [
  { url: "/useState", content: "useState" },
  { url: "/useEffect", content: "useEffect" },
  { url: "/useMemo", content: "useMemo" },
  { url: "/useRef", content: "useRef" },
  { url: "/useContext", content: "useContext" },
  { url: "/useReducer", content: "useReducer" },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Hooks Introduction</title>
        <meta name="description" content="A project introduce react hooks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is a React hooks implement project</h1>
        <ul>
          {pages.map(({ url, content }) => (
            <LinkItem key={url} url={url} content={content} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
