import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';

import HomeSlider from '../components/HomeSlider';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider />
      <Header />
    </div>
  );
}
