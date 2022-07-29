import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import usePageLoading from "../hooks/usePageLoading";
import Spinner from "../components/spinner/Spinner";

// Page transition delay time in millisecond
const DELAY_TIME: number = 500;

function MyApp({ Component, pageProps }: AppProps) {
  const pageLoading = usePageLoading(DELAY_TIME);

  return (
    <Provider store={store}>
      <Head>
        <title>Ecommerce app</title>
        <meta name="description" content="Ecommerce app" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      {pageLoading ? <Spinner /> : <Component {...pageProps} />}
    </Provider>
  );
}

export default MyApp;
