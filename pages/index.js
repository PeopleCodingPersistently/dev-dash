import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return;
  <>
    <Head>
      <title>Dev Dash</title>
    </Head>
    <main>
      <h1>This is our website</h1>;
      <Link href="/authenticated">
        <a>Click to Authenticate</a>
      </Link>
    </main>
  </>;
}
