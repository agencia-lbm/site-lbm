import Head from 'next/head';

import SobreNos from '../../components/SobreNos';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sobre Nós</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SobreNos />
    </div>
  );
}
