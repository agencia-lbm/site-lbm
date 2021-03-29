import styles from '../../../../styles/modules/SobreNos/MensagemPresidente/MensagemPresidente.module.scss'

export default function MensagemPresidente() {
    return (
        <section className={styles.msgPresidenteWrapper}>
            <div className={styles.leftWrapper}>
                <img src="/assets/images/bg-msg-presidente.png" alt="" />
            </div>
            <div className={styles.rightWrapper}>
                <h3>MENSAGEM DO PRESIDENTE</h3>
                <p>Criei a LBM há pouco mais de 3 anos, tendo em mente todos os desafios que uma agência de publicidade iria me proporcionar. Trabalhei sozinho boa parte desse tempo, procurando fazer tudo com qualidade, eficiência, ética e responsabilidade.</p>
                <p>E, para mim, estava claro que para tornar a LBM uma grande agência, a empresa precisava contar com os mais capacitados profissionais do mercado, para que juntos pudéssemos criar ideias e transformar o propósito dos nossos clientes.</p>
                <p>Com o passar do tempo evoluímos, crescemos, sempre de olho no futuro. E é isto que oferecemos ao mercado, porque não criamos apenas ideias, mas ideias  que ajudam nossos clientes a crescerem e transformarem seus negócios em busca de resultados signficativos.</p>
                <p>Estamos prontos para avançar rápido em direção ao futuro e fazer história, explorando novos territórios que nos possibilite fazer a diferença para nossos clientes.</p>
                <span>Lucas Bocchini,<br />Founder &amp; CEO</span>
                <img src="/assets/images/assinatura.png" alt="" />
            </div>
        </section>
    );
}
