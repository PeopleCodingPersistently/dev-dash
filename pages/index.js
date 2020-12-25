import Head from "next/head";
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from "next/router";

export default function Home() {
  const { pathname } = useRouter();
  const [session, loading] = useSession();

  console.log('USER', session?.user);

  return (
    <>
      <Head>
        <title>Dev Dash</title>
      </Head>
      {!session && (
        <div>
          <h1>You are not signed in</h1>
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
      {(session && !loading) && (
        <div>
          <h3>You are signed in as {session?.user?.name}</h3>
        </div>
      )
      }
    </>
  );
}
