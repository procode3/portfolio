import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Erick Barasa</title>
        <meta name='description' content='Erick Barasa' />
        <meta name='keywords' content='Erick Barasa' />
        <meta name='author' content='Erick Barasa' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
