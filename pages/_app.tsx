import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Ecommerce app</title>
        <meta name="description" content="Ecommerce app" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
