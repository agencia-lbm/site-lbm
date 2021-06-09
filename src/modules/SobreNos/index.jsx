import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from './Banner'
import MensagemPresidente from './MensagemPresidente'

import dynamic from 'next/dynamic'
const TextoSobreNos = dynamic(() => import('./TextoSobreNos'), { ssr: false })

export default function SobreNos() {
    return (
        <>
            <Header />
            <Banner />
            <TextoSobreNos />
            <MensagemPresidente />
            <Footer />
        </>
    );
}
