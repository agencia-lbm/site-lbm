import Head from 'next/head';
import { useEffect, useState } from 'react';

import HomeModules from '../modules/Home';
import styles from './styles.module.scss';


export default function Home() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
  }, [])

  return (
    <>
      {
        loading ? (
          <div className={styles.manutencaoWrapper}>
            <img src="./manutencao.gif" alt="Manutenção LBM" />
          </div>
        ) : <HomeModules />
      }
      <Head>
        <title>Agencia LBM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
