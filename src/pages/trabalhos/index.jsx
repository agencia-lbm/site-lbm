import Head from 'next/head';

import Trabalhos from '../../modules/Trabalhos';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Trabalhos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Trabalhos />
        </div>
    );
}
