import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Banner from './Banner'
import TextoSobreNos from './TextoSobreNos'
import MensagemPresidente from './MensagemPresidente'


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
