import Head from 'next/head';

import HomeModules from '../modules/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agencia LBM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeModules />
    </div>
  );
}
