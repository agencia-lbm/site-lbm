import Head from 'next/head';

import Contato from '../../modules/Contato';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Contato</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Contato />
        </div>
    );
}
