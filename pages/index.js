import Head from 'next/head';
import { useAuth } from 'use-auth0-hooks';
import { useRouter } from 'next/router';

export default function Home() {
  const { pathname } = useRouter();
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  console.log('IS AUTH', isAuthenticated);

  if(!isAuthenticated && !isLoading) {
    return (
      <button onClick={() => login({ appstate: { pathname } })}>Login</button>
    );
  }

  return (
    <>
      <Head>
        <title>Dev Dash</title>
      </Head>
      <main>
        <h1>This is our website</h1>
        <button onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_BASE_SERVER_URL })}>Logout</button>
      </main>
    </>
  );
}
