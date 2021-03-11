import Head from 'next/head';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agência LBM</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
