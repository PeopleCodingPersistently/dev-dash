import "../styles/globals.css";
import { Auth0Provider } from "use-auth0-hooks";

function MyApp({ Component, pageProps }) {
  console.log('')

  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={`${process.env.BASE_SERVER_URL}/authenticated`}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
