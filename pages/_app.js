import { Auth0Provider } from 'use-auth0-hooks';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}`}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
