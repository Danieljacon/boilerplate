import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel Jacon</title>
        <meta
          name="description"
          content="Daniel Jacon project with Next and Typescript"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
